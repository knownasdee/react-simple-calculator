import React from 'react';
import { render } from 'react-dom';
import './Keypad.css';

const numericKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
const operatorKeys = ['C', '+', '-', '='];

const Keypad = () => (
	<div className="keypad">
		<div className="numerics">
			{numericKeys.map(key => <button className={`numeric key-${key}`}>{key}</button>)}
		</div>
		<div className="operators">
			{operatorKeys.map(key => <button className={`operator key-${key}`}>{key}</button>)}
		</div>
	</div>
);

export default Keypad;
