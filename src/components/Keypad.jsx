import React, { Component } from 'react';
import { render } from 'react-dom';
import { func } from 'prop-types';
import Key from './Key';
import Config from '../helper/config';
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
				{Config.Numerics.map(key => <Key keyValue={key} handleClick={this.numericClick} />)}
				<Key keyValue={Config.Separator} handleClick={this.separatorClick} />
				<Key keyValue={Config.Clear} handleClick={this.clearClick} />
				{Config.Operators.map(operator => <Key keyValue={operator} handleClick={this.operatorClick} />)}
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
