/**
 *
 * ManageAccounts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectManageAccounts from './selectors';
import reducer from './reducer';
import saga from './saga';
import PageHeader from '../../components/PageHeader/index';

export class ManageAccounts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ManageAccounts</title>
          <meta name="description" content="Description of ManageAccounts" />
        </Helmet>
        <PageHeader title="Manage Accounts" />
      </div>
    );
  }
}

ManageAccounts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  manage_accounts: makeSelectManageAccounts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'manageAccounts', reducer });
const withSaga = injectSaga({ key: 'manageAccounts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ManageAccounts);
