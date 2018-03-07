/**
*
* BigBtn1
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class BigBtn1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  isBtnActive = () => {
    if (this.props.className === 'active') {
      return this.props.theme.get('primary');
    }
    return this.props.theme.get('tertiary');
  };
  render() {
    const StyledButton = styled.a`
      margin-left: ${this.props.tab};
      margin-top: 30px;
      font-size: 1.3em;
      background-color: ${this.isBtnActive()};
      color: ${this.props.theme.get('primary_text')};
      text-decoration: none;
      font-weight: bold;
      border: 1px solid black;
      width: 100%;
      height: auto;
      max-width: 20em;
      border-radius: 10px;
      text-align:center;
      padding: 10px;
    `;
    return (
      <StyledButton className="StyledButton" href={this.props.link}>
        {this.props.text}
      </StyledButton>
    );
  }
}

BigBtn1.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  theme: ImmutablePropTypes.map,
  tab: PropTypes.string,
  className: PropTypes.string,
};

export default BigBtn1;
