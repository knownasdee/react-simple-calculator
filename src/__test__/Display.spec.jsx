import React from 'react';
import { shallow } from 'enzyme';
import Display from '../components/Display';

const propsMock = {
  value: '11111',
  history: '1+100+1000+10000'
};

describe('Display', () => {
  it('renders correctly', () => {
    const component = shallow(<Display />);
    expect(component).toBeDefined();
  });

  it('shows result correctly', () => {
    const component = shallow(<Display {...propsMock} />);
    expect(component.find('.result').text()).toEqual(propsMock.value);
  });
});
