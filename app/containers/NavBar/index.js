 /**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import NavBtn from 'components/BTNS/NavBtn/Loadable';
import { getActive, styledElements } from '../../themes';
import makeSelectNavBar from './selectors';
import reducer from './reducer';
import saga from './saga';

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
    const NavWrap = styledElements.NavWrap;
    // const ProfileBtn = styledElements.ProfileBtn;
    return (
      <NavWrap>
        <NavBtn theme={theme} text="HOME" link="/" handler={(link) => this.navigate(link)} />
        <NavBtn theme={theme} text="ENTRIES" link="/entries" handler={(link) => this.navigate(link)} />
        <NavBtn theme={theme} text="DATABASE" link="/database" handler={(link) => this.navigate(link)} />
        <NavBtn theme={theme} text="LOGIN" link="/login" handler={(link) => this.navigate(link)} />
        <NavBtn theme={theme} text="REGISTRATION" link="/registration" handler={(link) => this.navigate(link)} />
        <NavBtn theme={theme} text="PROFILE" link="/profile" handler={(link) => this.navigate(link)} />
        <NavBtn theme={theme} text="ACCOUNTS" link="/accounts" handler={(link) => this.navigate(link)} />
        {/* <NavBtn theme={theme} text="DENIED" link="/denied" handler={(link) => this.navigate(link)} /> */}
      </NavWrap>
    );
  }
}

NavBar.propTypes = {
  // location: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  // active: PropTypes.obj,
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
