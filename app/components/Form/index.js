/**
*
* Form
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { styledElements } from 'themes';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Submit = styledElements.Submit;
    const Input = styledElements.Input;
    const schema = this.props.schema.map((value) =>
      <Input type={value.type} placeholder={value.name} style={value.style} />
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
