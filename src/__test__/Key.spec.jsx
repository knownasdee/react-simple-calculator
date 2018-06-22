import React from 'react';
import { shallow } from 'enzyme';
import Key from '../components/Key';

describe('Key', () => {
  it('renders correctly', () => {
    const component = shallow(<Key />);
    expect(component).toBeDefined();
  });
});
