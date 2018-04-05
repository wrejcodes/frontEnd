/**
*
* Filter
*
*/

import React from 'react';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Filter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Filterer = styled.div`
      width:100%;
      & > .{
        display: inline-block;
      }
    `;
    const SearchBar = styled.input`
      border: 1px solid black;
      border-radius: 5px;
      &.filter_txt{
        width:50%;
      }
      &.filter_btn{

      }
    `;
    return (
      <Filterer>
        <SearchBar className="filter_txt" type="text" name="keywords" /><SearchBar className="filter_btn" type="submit" value={messages.header} />
      </Filterer>
    );
  }
}

Filter.propTypes = {

};

export default Filter;
