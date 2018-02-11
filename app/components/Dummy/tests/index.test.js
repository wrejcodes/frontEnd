import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import Dummy from '../index';
import messages from '../messages';

describe('<Dummy />', () => {
  it('Should render some text', () => {
    const renderedComponent = shallow(
      <Dummy />
    );

    expect(renderedComponent.contains(
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    )).toBe(true);
  });
});
