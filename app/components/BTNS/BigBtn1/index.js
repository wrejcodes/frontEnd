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
      margin-left: ${this.props.tab};
      margin-top: 30px;
      font-size: 1.3em;
      background-color: ${this.props.theme.get('tertiary')};
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
      <StyledButton className="button" onClick={(evt) => this.onClick(evt)} >
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
  handler: PropTypes.func.isRequired,
};

export default BigBtn1;
