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
