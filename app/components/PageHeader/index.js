/**
*
* PageHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class PageHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Header = styled.h1`
      border-radius:10px;
      padding: 0.15em 1em;
      margin: 0 1em;
      text-align: center;
      background-color: #373c42;
      color: white;
      border: 2px solid #000000;
    `;
    return (
      <div className="header">
        <Header>{this.props.title}</Header>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
