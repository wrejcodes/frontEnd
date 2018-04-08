/**
*
* SelectDatabase
*
*/

import React from 'react';
import styled from 'styled-components';
import { getActive } from 'themes';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SelectDatabase extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const theme = getActive();
    const Select = styled.select`
      border: 1px solid black;
      margin-left: 5px;
      background-color: ${theme.get('primary')};
      margin-bottom: 5px;
    `;
    return (
      <Select onChange={this.changeSelection}>
        <option value="blank" hidden><FormattedMessage {...messages.select_form} /></option>
        <option value="target"><FormattedMessage {...messages.target} /></option>
        <option value="target_id"><FormattedMessage {...messages.target_id} /></option>
        <option value="experiment"><FormattedMessage {...messages.experiment} /></option>
        <option value="chemical"><FormattedMessage {...messages.chemical} /></option>
        <option value="toxicity"><FormattedMessage {...messages.toxicity} /></option>
        <option value="assay"><FormattedMessage {...messages.assay} /></option>
        <option value="citation"><FormattedMessage {...messages.citation} /></option>
        <option value="citation_id"><FormattedMessage {...messages.citation_id} /></option>
      </Select>
    );
  }
}
/* <option value="blank" hidden><FormattedMessage {...messages.select_form} /></option>
<option value="target">Target</option>
<option value="target_id">Target ID</option>
<option value="experiment">Experiment</option>
<option value="chemical">Chemical</option>
<option value="toxicity">Toxicity</option>
<option value="assay">Assay</option>
<option value="citation">Citation</option>
<option value="citation_id">Citation ID</option> */

SelectDatabase.propTypes = {

};

export default SelectDatabase;
