import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from 'components/PageHeader/index';
import BigBtn1 from 'components/BTNS/BigBtn1';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('Expect to have a <PageHeader /> component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(PageHeader).length).toEqual(1);
  });

  it('Expect to have 3 <BigBtn1 /> components', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(BigBtn1).length).toEqual(3);
  });
});
