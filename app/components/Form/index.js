/**
*
* Form
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Input = styled.input`
      border: 1px solid black;
      margin-left: 5px;
      margin-bottom: 5px;
      border-radius: 5px;
      background-color: lavender;
    `;
    const Submit = styled.input`
      border: 1px solid black;
      margin-left: 5px;
      margin-bottom: 5px;
      background-color: #A1D4E3;
      border-radius: 5px;
    `;
    const schema = this.props.schema.map((value) =>
      <Input type={value.type} placeholder={value.name} />
    );
    return (
      <div>
        <form>
          <div> { schema } </div>
          <Submit type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  schema: PropTypes.array,
};

export default Form;
