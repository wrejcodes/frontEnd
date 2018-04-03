/**
*
* NavBtn 
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class NavBtn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    evt.preventDefault();
    this.props.handler(this.props.link);
  }
  // isBtnActive = () => {
  //   if (this.props.className === 'active') {
  //     return this.props.theme.get('primary');
  //   }
  //   return this.props.theme.get('tertiary');
  // };
  render() {
    const StyledButton = styled.a`
      color: white;
      text-decoration: none;
      font-weight: bold;
      width: auto;
      height: auto;
      padding: 10px;
      cursor: pointer;
      &:hover{
        color: ${this.props.theme.get('secondary')};
      }
    `;
    return (
      <StyledButton onClick={(evt) => { this.onClick(evt); }} >
        {this.props.text}
      </StyledButton>
    );
  }
}

NavBtn.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
  theme: ImmutablePropTypes.map,
  handler: PropTypes.func.isRequired,
  // className: PropTypes.string,
};

export default NavBtn;
