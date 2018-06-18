import React, { Component } from 'react';
import { render } from 'react-dom';
import Key from './Key';
import './Keypad.css';

const getDecimalSeparator = () => {
	const n = 1.1;
	return /^1(.+)1$/.exec(n.toLocaleString())[1];
};
const numerics = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
const separator = getDecimalSeparator();
const operators = ['+', '-', '='];

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
				{numerics.map(key => <Key keyValue={key} handleClick={this.numericClick} />)}
				<Key keyValue={separator} handleClick={this.separatorClick} />
				<Key keyValue="C" handleClick={this.clearClick} />
				{operators.map(operator => <Key keyValue={operator} handleClick={this.operatorClick} />)}
			</div>
		);
	}
}

export default Keypad;
