/**
*
* DbViewport
*
*/

import React from 'react';

import styled from 'styled-components';
import { getActive } from 'themes';
import Data from '../../../moch_data/json/assay_v2.json';
import Entries from '../DbEntry';

class DbViewport extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.moch = Data;
  }
  render() {
    const theme = getActive();
    const ViewPort = styled.div`
      border: 1px solid black;
      margin:auto;
      border-radius: 5px;
      width:90%;
      height:70vh;
      margin-top: 20px;
      background-color: ${theme.get('primary')};
      overflow-y: scroll;
    `;
    const mochComponents = this.moch.map((moch) => <Entries moch={moch} />);
    return <ViewPort>{mochComponents}</ViewPort>;
  }
}

DbViewport.propTypes = {

};

export default DbViewport;
