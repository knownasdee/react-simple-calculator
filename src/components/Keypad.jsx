import React, { Component } from 'react';
import { render } from 'react-dom';
import Key from './Key';
import './Keypad.css';
import { Operators, Numerics } from '../helper/keypadConfig';

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
				{Numerics.map(key => <Key keyValue={key} handleClick={this.numericClick} />)}
				<Key keyValue={this.props.separator} handleClick={this.separatorClick} />
				<Key keyValue="C" handleClick={this.clearClick} />
				{Operators.map(operator => <Key keyValue={operator} handleClick={this.operatorClick} />)}
			</div>
		);
	}
}

export default Keypad;
