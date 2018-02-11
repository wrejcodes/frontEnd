/**
*
* Dummy
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Dummy() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Dummy.propTypes = {

};

export default Dummy;
