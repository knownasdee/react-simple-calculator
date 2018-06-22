import React from 'react';
import { shallow } from 'enzyme';
import Keypad from '../components/Keypad';
import Constants from '../helper/constants';

describe('Keypad', () => {
  it('renders correctly', () => {
    const component = shallow(<Keypad />);
    expect(component).toBeDefined();
  });

  it('has all keys', () => {
    const component = shallow(<Keypad />);
    const keyCount =
      Constants.NUMERICS.length + Constants.OPERATORS.length + Constants.SEPARATOR.length + Constants.CLEAR.length;

    expect(component.find('.keypad').children().length).toEqual(keyCount);
  });
});
