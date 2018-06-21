import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import Helper from '../helper/calculate';
import Constants from '../helper/constants';
import './Calculator.css';

class Calculator extends Component {
  state = {
    operand: null,
    operator: null,
    result: '0',
    history: ''
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleNumeric = newValue => {
    const { operand } = this.state;

    // eliminate leading zeros
    if (operand === '0' && newValue) return {};

    // keep constructing existing number
    if (operand !== null) return { operand: operand + String(newValue) };

    // first number entered
    return { operand: String(newValue) };
  };

  handleSeparator = () => {
    const { operand } = this.state;
    const separator = Constants.SEPARATOR;

    // for existing whole number entry, add separator
    if (operand && !operand.includes(separator)) return { operand: operand + separator };
    // if separator is entered with no existing operand turn '.' into '0.'
    else if (!operand) return { operand: `0${separator}` };
    return {};
  };

  handleOperator = nextOperator => {
    const { operand, operator, result, history } = this.state;

    // a minimum of two operands and an operation were enetered, (temp) result can be calculated
    if (operand && operator) {
      // reset history if this is the final result
      if (nextOperator === '=') {
        return {
          operand: null,
          operator: null,
          result: String(Helper.calculate(result, operand, operator)),
          history: ''
        };
      }
      // keep on chaining history if last operation was + or -
      return {
        operand: null,
        operator: nextOperator,
        result: String(Helper.calculate(result, operand, operator)),
        history: history + operand + nextOperator
      };
    }

    // (temp) result has been calculated, next operation entered
    if (!operand && nextOperator !== '=') {
      // keep on chaining history
      const currentHistory = history.length > 0 ? history.substr(0, history.length - 1) : result;
      return {
        operator: nextOperator,
        history: currentHistory + nextOperator
      };
    }

    // if '=' is clicked right after evaluation or number entry, do nothing
    if (nextOperator === '=') {
      return {
        operand: null,
        operator: null,
        result: operand || result,
        history: ''
      };
    }

    // first operand and first action (+ or -) were entered
    return {
      operand: null,
      operator: nextOperator,
      result: operand,
      history: history + operand + nextOperator
    };
  };

  handleClear = () => ({
    operand: null,
    operator: null,
    result: '0',
    history: ''
  });

  numericClick = e => {
    this.setState(this.handleNumeric(e.target.textContent));
  };

  separatorClick = () => {
    this.setState(this.handleSeparator);
  };

  operatorClick = e => {
    this.setState(this.handleOperator(e.target.textContent));
  };

  clearClick = () => {
    this.setState(this.handleClear);
  };

  handleKeyDown = e => {
    const key = e.key === 'Enter' ? '=' : e.key;

    if (Constants.NUMERICS.includes(key)) {
      this.setState(this.handleNumeric(key));
    } else if (key === Constants.SEPARATOR) {
      this.setState(this.handleSeparator);
    } else if (Constants.OPERATORS.includes(key)) {
      this.setState(this.handleOperator(key));
    } else if (key === 'Escape' || key === 'Esc' || key === 'Delete') {
      this.setState(this.handleClear);
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.operand || this.state.result} history={this.state.history} />
        <Keypad
          numericClick={this.numericClick}
          separatorClick={this.separatorClick}
          clearClick={this.clearClick}
          operatorClick={this.operatorClick}
        />
      </div>
    );
  }
}

export default Calculator;
