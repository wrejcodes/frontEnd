import React from 'react';
import { shallow } from 'enzyme';

import BigBtn1 from '../index';

describe('<BigBtn1 />', () => {
  it('Expect to render one styled button', () => {
    const theme = { color: 'red' };
    const wrapper = shallow(<BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />);
    expect(wrapper.find('a').length).toEqual(1);
  });

  it('Expect to receieve a link from props', () => {
    const wrapper = shallow(<BigBtn1 link="/database" handler={(link) => this.navigate(link)} />);
    expect(wrapper.instance().props.link).toEqual('/database');
  });
  // it('Expect to receieve text from props', () => {
  //   const wrapper = shallow(<BigBtn1 text="Home" />);
  //   expect(wrapper.instance().props.text).toEqual('Home');
  // });
  //
  // it('Expect to receieve a theme from props', () => {
  //   const theme = { color: 'red' };
  //   const wrapper = shallow(<BigBtn1 theme={theme} />);
  //   expect(wrapper.instance().props.theme.color).toEqual('red');
  // });
  //
  // it('Expect to receieve a tab from props', () => {
  //   const tab = '5px';
  //   const wrapper = shallow(<BigBtn1 tab={tab} />);
  //   expect(wrapper.instance().props.tab).toEqual('5px');
  // });
  //
  // it('Expect to receieve a handler from props', () => {
  //   const handler = () => { };
  //   const wrapper = shallow(<BigBtn1 handler={handler} />);
  //   expect(wrapper.find('handler'));
  // });
});
