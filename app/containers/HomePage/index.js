/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl'

import styled from 'styled-components';
import BigBtn1 from 'components/BTNS/BigBtn1';
import { getActive } from 'themes';
import PageHeader from 'components/PageHeader/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import '../../images/CheMoa_Transparent.png';


export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  navigate(path) {
    this.props.dispatch(push(path));
  }
  render() {
    const theme = getActive();
    const FlexBox = styled.div`
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
    `;
    const CenterImage = styled.div`
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0,0,0,0);
    `;
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        <CenterImage>
          <Image src="/CheMoa_Transparent.png" responsive square />
        </CenterImage>
        <p className="text-center"><FormattedMessage {...messages.description} /></p>
        <FlexBox >
          <BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />
          <BigBtn1 tab="6%" theme={theme} text="Add/Delete Entries" link="/entries" handler={(link) => this.navigate(link)} />
          <BigBtn1 tab="11%" theme={theme} text="Analysis" link="/analysis" handler={(link) => this.navigate(link)} />
        </FlexBox>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
