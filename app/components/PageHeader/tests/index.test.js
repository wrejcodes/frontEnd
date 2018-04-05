import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../index';

describe('<PageHeader />', () => {
  it('Expect to receieve a title from props', () => {
    const wrapper = shallow(<PageHeader title="Test Title" />);
    expect(wrapper.instance().props.title).toEqual('Test Title');
  });
  it('Expect to render a div', () => {
    const wrapper = shallow(<PageHeader />);
    expect(wrapper.find('div.header').length).toEqual(1);
  });
});
