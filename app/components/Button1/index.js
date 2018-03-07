/**
*
* Button1
*
*/

import React from 'react';

// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

class Button1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    evt.preventDefault();
    this.props.handler(this.props.link);
  }

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
    //     ;;; ${theme.primary}
    return (
      <StyledButton onClick={(evt) => { this.onClick(evt); }} >
        {this.props.text}
      </StyledButton>
    );
  }
}

Button1.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
  theme: ImmutablePropTypes.map,
  handler: PropTypes.func.isRequired,
  // active: PropTypes.obj,
};

export default Button1;
