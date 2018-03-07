/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Button1 from 'components/Button1/Loadable';
import { getActive } from 'themes';
import makeSelectNavBar from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const theme = getActive();
    const NavWrap = styled.div`
      height: 50px;
      width: 100%;
      background-color: grey;
      display: -webkit-flex;
      display: flex;
    `;
    return (
      <NavWrap>
        <Button1 theme={theme} text="HOME" link="/" />
        <Button1 theme={theme} text="ENTRIES" link="/entries" />
        <Button1 theme={theme} text="DATABASE" link="/database" />
        <Button1 theme={theme} text="LOGIN" link="/login" />
        <Button1 theme={theme} text="REGISTRATION" link="/registration" />
        <Button1 theme={theme} text="PROFILE" link="/profile" />
        <Button1 theme={theme} text="ACCOUNTS" link="/accounts" />
        <Button1 theme={theme} text="DENIED" link="/denied" />
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
