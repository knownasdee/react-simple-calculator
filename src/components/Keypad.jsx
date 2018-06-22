import React, { Component } from 'react';
import { func } from 'prop-types';
import Key from './Key';
import Constants from '../helper/constants';
import './Keypad.css';

class Keypad extends Component {
  numericClick = e => {
    this.props.numericClick(e);
  };

  separatorClick = e => {
    this.props.separatorClick(e);
  };

  clearClick = e => {
    this.props.clearClick(e);
  };

  operatorClick = e => {
    this.props.operatorClick(e);
  };

  render() {
    return (
      <div className="keypad">
        {Constants.NUMERICS.map(key => <Key keyValue={key} className="numeric" handleClick={this.numericClick} />)}
        <Key keyValue={Constants.SEPARATOR} className="separator" handleClick={this.separatorClick} />
        <Key keyValue={Constants.CLEAR} className="clear" handleClick={this.clearClick} />
        {Constants.OPERATORS.map(operator => (
          <Key keyValue={operator} className="operator" handleClick={this.operatorClick} />
        ))}
      </div>
    );
  }
}

Keypad.propTypes = {
  numericClick: func.isRequired,
  separatorClick: func.isRequired,
  clearClick: func.isRequired,
  operatorClick: func.isRequired
};

export default Keypad;
