/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Button1 from 'components/Button1/Loadable';
import { getActive } from 'themes';
import makeSelectNavBar from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(path) {
    this.props.dispatch(push(path));
  }

  render() {
    const theme = getActive();
    const NavWrap = styled.div`
      height: 50px;
      width: 100%;
      background-color: grey;
      display: -webkit-flex;
      display: flex;
    `;
    // const loginLink = '/login';
    // const loginText = "LOGIN";
    return (
      <NavWrap>
        <Button1 theme={theme} text="HOME" link="/" handler={(link) => this.navigate(link)} />
        <Button1 theme={theme} text="ENTRIES" link="/entries" handler={(link) => this.navigate(link)} />
        <Button1 theme={theme} text="DATABASE" link="/database" handler={(link) => this.navigate(link)} />
        <Button1 theme={theme} text="LOGIN" link="/login" handler={(link) => this.navigate(link)} />
        <Button1 theme={theme} text="PROFILE" link="/profile" handler={(link) => this.navigate(link)} />
        <Button1 theme={theme} text="ACCOUNTS" link="/accounts" handler={(link) => this.navigate(link)} />
        <Button1 theme={theme} text="DENIED" link="/denied" handler={(link) => this.navigate(link)} />
      </NavWrap>
    );
  }
}

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navBar', reducer });
const withSaga = injectSaga({ key: 'navBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavBar);
