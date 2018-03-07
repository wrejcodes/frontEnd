/**
*
* Button1
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class Button1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const StyledButton = styled.a`
      background-color: ${this.props.theme.get('secondary')};
      color: #222222;
      text-decoration: none;
      font-weight: bold;
      border: 1px solid black;
      width: auto;
      height: auto;
      padding: 10px;
    `;
    return (
      <StyledButton className="StyledButton" href={this.props.link}>
        {this.props.text}
      </StyledButton>
    );
  }
}

Button1.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  theme: ImmutablePropTypes.map,
};

export default Button1;
