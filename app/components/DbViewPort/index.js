/**
*
* DbViewPort
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class DbViewPort extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Wrapper = styled.div`
      width: 700px;
      height: 100%;
      border:1px solid black;
      border-radius: 10px;
    `;
    return (
      <Wrapper>
        <FormattedMessage {...messages.header} />
      </Wrapper>
    );
  }
}

DbViewPort.propTypes = {

};

export default DbViewPort;
