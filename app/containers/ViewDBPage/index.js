/**
 *
 * ViewDbpage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getActive } from 'themes';

import PageHeader from 'components/PageHeader/index';
import DbSideSearch from 'components/DbSideSearch';
import DbViewPort from 'components/DbViewPort';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewDbpage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ViewDbpage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
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
          <title>Database</title>
          <meta name="description" content="Database Page" />
        </Helmet>
        <PageHeader title="Database" />
        <Select onChange={this.changeSelection}>
          <option value="blank" hidden>Select Form</option>
          <option value="target">Target</option>
          <option value="target_id">Target ID</option>
          <option value="experiment">Experiment</option>
          <option value="chemical">Chemical</option>
          <option value="toxicity">Toxicity</option>
          <option value="assay">Assay</option>
          <option value="citation">Citation</option>
          <option value="citation_id">Citation ID</option>
        </Select>
        <div>
          <DbViewPort />
          <DbSideSearch />
        </div>
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
