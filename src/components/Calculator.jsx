import React from 'react';
import { render } from 'react-dom';
import Display from './Display';
import Keypad from './Keypad';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <Display />
    <Keypad />
  </div>
);

export default Calculator;
