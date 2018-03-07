/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageHeader from 'components/PageHeader/index';
import Form from 'components/Form/index';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRegistration from './selectors';
import reducer from './reducer';
import saga from './saga';
import { SCHEMAS } from '../App/constants';

export class Registration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Registration</title>
          <meta name="description" content="Registration Page" />
        </Helmet>
        <PageHeader title="Registration" />
        <Form schema={SCHEMAS.registration} />
      </div>
    );
  }
}

Registration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registration: makeSelectRegistration(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registration', reducer });
const withSaga = injectSaga({ key: 'registration', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Registration);
