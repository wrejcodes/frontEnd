/**
*
* DbViewport
*
*/

import React from 'react';
// import styled from 'styled-components';

import styled from 'styled-components';
import { getActive } from 'themes';
import Entries from '../DbEntry';

class DbViewport extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.moch = [
      {
        head: 'Entry0',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry1',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry2',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry3',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry4',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry0',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry1',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry2',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry3',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry4',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry0',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry1',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry2',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry3',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
      {
        head: 'Entry4',
        desc: 'This is a sample descripton of this entry that is ver long and ver pret.',
        id: 1,
      },
    ];
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
