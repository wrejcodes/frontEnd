/**
*
* Button1
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import theme from 'themes.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import messages from './messages';

// background-color: ${theme.getActive().primary},
class Button1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const StyledButton = styled.button`
      background-color: lightblue;
      border: 1px solid black;
      width: 20px;
    `;
    return (
      <StyledButton>
        <a className="StyledButton" href={this.props.link}>
          {this.props.text}
        </a>
      </StyledButton>
    );
  }
}

Button1.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

export default Button1;
