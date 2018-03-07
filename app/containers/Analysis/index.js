/**
 *
 * Analysis
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAnalysis from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Analysis extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Analysis</title>
          <meta name="description" content="Analysis Page" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Analysis.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysis(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'analysis', reducer });
const withSaga = injectSaga({ key: 'analysis', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Analysis);
