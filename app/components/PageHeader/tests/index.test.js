// // import React from 'react';
// // import { shallow } from 'enzyme';
//
// // import PageHeader from '../index';
//
// describe('<PageHeader />', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });


import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../index';

describe('<PageHeader />', () => {
  it('Expect to render a div', () => {
    const wrapper = shallow(<PageHeader />);
    expect(wrapper.find('div.header').length).toEqual(1);
  });
  it('Expect to receieve a title from props', () => {
    const title = 'Test Title';
    const wrapper = shallow(<PageHeader title={title} />);
    expect(wrapper.instance().props.title).toEqual(title);
  });
});
