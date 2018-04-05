/**
*
* DbViewport
*
*/

import React from 'react';

import styled from 'styled-components';
import { getActive } from 'themes';
import Assay from '../../../moch_data/json/assay_v2.json';
// import Citation from '../../../moch_data/json/citation_v2.json';
// import CitationID from '../../../moch_data/json/citation_id_v2.json';
// import Target from '../../../moch_data/json/target_v2.json';
// import TargetID from '../../../moch_data/json/target_id_v2.json';
// import Tox from '../../../moch_data/json/tox.json';
import SelectDatabase from '../SelectDatabase';
import Entries from '../DB_Helper_Components/DbEntry';
import Filter from '../DB_Helper_Components/Filter';
import PageTurn from '../DB_Helper_Components/PageTurn';

class DbViewport extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    // this.moch = Object.assign(Assay, Citation, CitationID, Target, TargetID, Tox);
    // split array into chunks
    this.state = { page: 0 };
    let temparray;
    const chunk = 12;
    for (let i = 0, j = Assay.length; i < j; i += chunk) {
      temparray = Assay.slice(i, i + chunk);
      this.moch = temparray;
    }
  }
  render() {
    const theme = getActive();
    const ViewPort = styled.div`
      border: 1px solid black;
      border-radius: 5px;
      margin:auto;
      width:100%;
      margin-top: 20px;
      background-color: ${theme.get('primary')};
      overflow-y: scroll;
    `;
    const Wrapper = styled.div`
      width: 300px;
      height:100%;
      border-radius: 5px;
      border: 1px solid black;
    `;
    const mochComponents = this.moch.map((moch) => <Entries moch={moch} />);
    return (
      <Wrapper>
        <Filter />
        <SelectDatabase />
        <PageTurn />
        <ViewPort>{mochComponents}</ViewPort>
      </Wrapper>
    );
  }
}

DbViewport.propTypes = {

};

export default DbViewport;
