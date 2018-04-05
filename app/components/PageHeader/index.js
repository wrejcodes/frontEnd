/**
*
* PageHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { styledElements } from 'themes';

class PageHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Header = styledElements.Header;
    return (
      <div className="header">
        <Header>{this.props.title}</Header>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
