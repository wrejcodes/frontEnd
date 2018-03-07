/**
 *
 * BadPermissions
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
import makeSelectBadPermissions from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class BadPermissions extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Error</title>
          <meta name="description" content="Access Denied Page" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

BadPermissions.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  badpermissions: makeSelectBadPermissions(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'badPermissions', reducer });
const withSaga = injectSaga({ key: 'badPermissions', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BadPermissions);
