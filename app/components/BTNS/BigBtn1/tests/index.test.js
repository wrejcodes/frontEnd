import React from 'react';
import { shallow } from 'enzyme';
import * as matchers from 'jest-immutable-matchers';
import { getActive } from 'themes';
import { Map } from 'immutable';
import BigBtn1 from '../index';


describe('<BigBtn1 />', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  it('Expect to render one styled button', () => {
    const theme = getActive();
    const wrapper = shallow(<BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />);
    expect(wrapper.find('.button').length).toEqual(1);
  });

  it('Expect to receieve a link from props', () => {
    const theme = getActive();
    const wrapper = shallow(<BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />);
    expect(wrapper.instance().props.link).toEqual('/database');
  });

  it('Expect to receieve text from props', () => {
    const theme = getActive();
    const wrapper = shallow(<BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />);
    expect(wrapper.instance().props.text).toEqual('View Database');
  });

  it('Expect to receieve a theme from props', () => {
    const theme = getActive();
    const wrapper = shallow(<BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />);
    expect(wrapper.instance().props.theme).toEqual(Map({
      active: expect.any(Boolean),
      primary: expect.any(String),
      secondary: expect.any(String),
      tertiary: expect.any(String),
      four: expect.any(String),
      header_text: expect.any(String),
      primary_text: expect.any(String),
      secondary_text: expect.any(String),
    }));
  });

  it('Expect to receieve a tab from props', () => {
    const theme = getActive();
    const wrapper = shallow(<BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />);
    expect(wrapper.instance().props.tab).toEqual('1%');
  });

  // it('Expect to receieve a handler from props', () => {
  //   const theme = getActive();
  //   const wrapper = mount(<BigBtn1 tab="1%" theme={theme} text="View Database" link="/database" handler={(link) => this.navigate(link)} />);
  //   expect(wrapper.instance().props.link).toEqual('/database');
  // });
});
