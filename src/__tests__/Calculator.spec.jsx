import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const component = shallow(<Calculator />);
    expect(component).toBeDefined();
  });
});
