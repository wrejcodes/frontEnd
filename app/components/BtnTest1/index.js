/**
*
* BtnTest1
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class BtnTest1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <span>
          <FormattedMessage {...messages.header} />
        </span>
      </div>
    );
  }
}

BtnTest1.propTypes = {

};

export default BtnTest1;
