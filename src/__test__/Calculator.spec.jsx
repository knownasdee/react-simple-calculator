import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from '../components/Calculator';
import Constants from '../helper/constants';

describe('Calculator', () => {
  it('renders correctly', () => {
    const component = shallow(<Calculator />);
    expect(component).toBeDefined();
  });

  it('allows entering new numeric value', () => {
    const component = mount(<Calculator />);

    const digit = component.find('.numeric').at(0);
    digit.simulate('click');

    expect(component.state().operand).toEqual(digit.text());
  });

  it('displays "0." if separator is clicked without operand', () => {
    const component = mount(<Calculator />);
    component.setState({ operand: null });

    component
      .find('.separator')
      .at(0)
      .simulate('click');

    expect(component.state().operand).toEqual(`0${Constants.SEPARATOR}`);
  });

  it('calculates sum correctly', () => {
    const component = mount(<Calculator />);
    component.setState({
      operand: '5',
      operator: '+',
      result: '10'
    });

    component
      .find('.operator')
      .at(Constants.OPERATORS.indexOf('='))
      .simulate('click');

    expect(component.state().result).toEqual('15');
  });

  it('subtracts decimals correctly', () => {
    const component = mount(<Calculator />);
    component.setState({
      operand: '0.002',
      operator: '-',
      result: '0.003'
    });

    component
      .find('.operator')
      .at(Constants.OPERATORS.indexOf('='))
      .simulate('click');

    expect(component.state().result).toEqual('0.001');
  });

  it('clears displayed value', () => {
    const component = mount(<Calculator />);
    const clearState = {
      operand: null,
      operator: null,
      result: '0',
      history: ''
    };
    component.setState({
      operand: '200',
      operator: '-',
      result: '300',
      history: '1+3-90+87'
    });

    component
      .find('.clear')
      .at(0)
      .simulate('click');

    expect(component.state()).toEqual(clearState);
  });
});
