import React from 'react';
import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';

import { getActive } from 'themes';

import NavBtn from '../index';

const { Map } = require('immutable');
// describe('<NavBtn />', () => {
//   it('renders a button', () => {
//     const navbtn = shallow(<NavBtn />);
//     // expect(navbtn.find('div.NavBtn').length.toequal(1))
//   });
// });
describe('<NavBtn />', () => {
  const theme = Map({ thing: 'test' });
  // it('should render correctly', () => {
  //   const output = shallow(
  //     <NavBtn theme={theme} text="HOME" link="/" />
  //   );
  // });


  const wrapper = shallow(
    <NavBtn theme={theme} text="TEST" link="/link" />
  );
  it('should get a theme', () => {
    expect(wrapper.instance().props.theme).toEqual(theme);
  });
  it('should get a title', () => {
    expect(wrapper.instance().props.text).toEqual('TEST');
  });
  it('should get a link', () => {
    expect(wrapper.instance().props.link).toEqual('/link');
  });
  // it('should get a handler', () => {
  //   expect(wrapper.instance().props.link).toEqual();
  // });
});
