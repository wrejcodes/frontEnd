import React from 'react';
import { shallow } from 'enzyme';

import NavBtn from '../index';

describe('<NavBtn />', () => {
  it('renders a button', () => {
    const navbtn = shallow(<NavBtn />);
    // expect(navbtn.find('div.NavBtn').length.toequal(1))
  });
});
