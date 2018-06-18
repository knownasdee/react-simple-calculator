import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from './Display';
import Keypad from './Keypad';
import './Calculator.css';
import helper from '../helper/helper';

class Calculator extends Component {
	state = {
		operand: null,
		operator: null,
		result: '0'
	};
	updateState = (updateFunc, inputKey) => {
		this.setState(updateFunc(this.state, inputKey));
	};
	numericClick = e => {
		this.updateState(helper.handleNumeric, e.target.textContent);
	};
	separatorClick = e => {
		this.updateState(helper.handleSeparator, e.target.textContent);
	};
	clearClick = e => {
		this.updateState(helper.handleClear);
	};
	operatorClick = e => {
		this.updateState(helper.handleOperator, e.target.textContent);
	};

	handleKeyDown = e => {
		let key = e.key;
		if (key === 'Enter') key = '=';

		if (/[0-9]/.test(key)) {
			event.preventDefault();
			this.updateState(helper.handleNumeric, key);
		} else if (key === '.') {
			event.preventDefault();
			this.updateState(helper.handleSeparator, key);
		} else if (key === '+' || key === '-' || key === '=') {
			event.preventDefault();
			this.updateState(helper.handleOperator, key);
		} else if (key === 'Escape' || key === 'Esc' || key === 'Delete') {
			event.preventDefault();
			this.updateState(helper.handleClear, key);
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	render() {
		return (
			<div className="calculator">
				<Display value={this.state.operand || this.state.result || '0'} />
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
