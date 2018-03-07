/**
*
* DbEntry
*
*/

import React from 'react';
import styled from 'styled-components';
import { getActive } from 'themes';
import PropTypes from 'prop-types';

class DbEntry extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // constructor(props){
  //   super(props);
  //   this.setState();
  // }
  render() {
    const theme = getActive();
    const Entry = styled.div`
      border: 1px solid black;
      margin:auto;
      width:100%;
      height:12.4%;
      background-color: ${theme.get('tertiary')};
      color: $(theme.get('secondary_text'));
      position:relative;
      > h3 {
        position: absolute;
        top: 0px;
        margin: 0px;
      }
    `;
    return (
      <Entry>
        <h3> {this.props.moch.head} :
          <span style={{ fontSize: '.9em' }}> ID: {this.props.moch.id} </span></h3>
        <p> Description: {this.props.moch.desc}</p>
      </Entry>
    );
  }
}

DbEntry.propTypes = {
  moch: PropTypes.obj,
};

export default DbEntry;
