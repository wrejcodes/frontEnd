/**
 *
 * ViewDbpage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewDbpage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import PageHeader from '../../components/PageHeader/index';

export class ViewDbpage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Database</title>
          <meta name="description" content="Description of ViewDbpage" />
        </Helmet>
        <PageHeader title="Database" />
      </div>
    );
  }
}

ViewDbpage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewdbpage: makeSelectViewDbpage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'viewDbpage', reducer });
const withSaga = injectSaga({ key: 'viewDbpage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewDbpage);
