/**
 *
 * EntriesPage
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
import makeSelectEntriesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import PageHeader from '../../components/PageHeader/index';


export class EntriesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Entries</title>
          <meta name="description" content="Description of EntriesPage" />
        </Helmet>
        <PageHeader title="Database Entries" />
      </div>
    );
  }
}

EntriesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  entriespage: makeSelectEntriesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'entriesPage', reducer });
const withSaga = injectSaga({ key: 'entriesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EntriesPage);
