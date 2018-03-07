/**
 *
 * EntriesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getActive } from 'themes';
import Form from 'components/Form/index';
import PageHeader from 'components/PageHeader/index';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEntriesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { SCHEMAS } from '../App/constants';

export class EntriesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { selection: 'blank' };
  }
  changeSelection = (e) => {
    this.setState({ selection: e.target.value });
  }
  render() {
    const theme = getActive();
    const Select = styled.select`
      border: 1px solid black;
      margin-left: 5px;
      background-color: ${theme.get('primary')};
      margin-bottom: 5px;
    `;
    return (
      <div>
        <Helmet>
          <title>Entries</title>
          <meta name="description" content="Description of EntriesPage" />
        </Helmet>
        <PageHeader title="Database Entries" />
        <Select onChange={this.changeSelection}>
          <option value="blank" hidden>Select Form</option>
          <option value="target">Target</option>
          <option value="experiment">Experiment</option>
          <option value="chemical">Chemical</option>
        </Select>
        <Form schema={SCHEMAS[this.state.selection]} />
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
