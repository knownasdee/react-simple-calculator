import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import helper from '../helper/logic';
import Config from '../helper/config';
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
  updateState = (updateFunc, inputKey) => {
    this.setState(updateFunc(this.state, inputKey));
  };

  numericClick = e => {
    this.updateState(helper.handleNumeric, e.target.textContent);
  };

  separatorClick = () => {
    this.updateState(helper.handleSeparator);
  };

  clearClick = () => {
    this.updateState(helper.handleClear);
  };

  operatorClick = e => {
    this.updateState(helper.handleOperator, e.target.textContent);
  };

  handleKeyDown = e => {
    const key = e.key === 'Enter' ? '=' : e.key;

    if (/[0-9]/.test(key)) {
      this.updateState(helper.handleNumeric, key);
    } else if (key === Config.Separator) {
      this.updateState(helper.handleSeparator);
    } else if (Config.Operators.includes(key)) {
      this.updateState(helper.handleOperator, key);
    } else if (key === 'Escape' || key === 'Esc' || key === 'Delete') {
      this.updateState(helper.handleClear);
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
