/**
 *
 * EntriesPage
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
import makeSelectEntriesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class EntriesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>EntriesPage</title>
          <meta name="description" content="Description of EntriesPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
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
