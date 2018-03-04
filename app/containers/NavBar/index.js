/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Button1 from 'components/Button1/Loadable';
import { getActive } from 'themes';
import makeSelectNavBar from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

export class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      activeTab: 'home',
    };
  }
  setPathActive = (pathname) => {
    this.state = {
      activeTab: pathname,
    };
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
    return (
      <NavWrap>
        <Button1 theme={theme} text="HOME" link="/" className={(this.state.activeTab === 'home') ? 'active' : ''} onClick={this.setPathActive('home')} />
        <Button1 theme={theme} text="ENTRIES" link="/entries" className={(this.state.activeTab === 'entries') ? 'active' : ''} onClick={this.setPathActive('entries')} />
        <Button1 theme={theme} text="DATABASE" link="/database" className={(this.state.activeTab === 'database') ? 'active' : ''} onClick={this.setPathActive('database')} />
        <Button1 theme={theme} text="LOGIN" link="/login" className={(this.state.activeTab === 'login') ? 'active' : ''} onClick={this.setPathActive('active')} />
        <Button1 theme={theme} text="PROFILE" link="/profile" className={(this.state.activeTab === 'profile') ? 'active' : ''} onClick={this.setPathActive('profile')} />
        <Button1 theme={theme} text="ACCOUNTS" link="/accounts" className={(this.state.activeTab === 'accounts') ? 'active' : ''} onClick={this.setPathActive('accounts')} />
        <Button1 theme={theme} text="DENIED" link="/denied" className={(this.state.activeTab === 'denied') ? 'active' : ''} onClick={this.setPathActive('denied')} />
      </NavWrap>
    );
  }
}

NavBar.propTypes = {
  location: PropTypes.object,
  // dispatch: PropTypes.func.isRequired,
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

// const routherthing = withRouther(NavBar);
const withReducer = injectReducer({ key: 'navBar', reducer });
const withSaga = injectSaga({ key: 'navBar', saga });

export default compose(
  // routherthing,
  withReducer,
  withSaga,
  withConnect,
)(NavBar);
