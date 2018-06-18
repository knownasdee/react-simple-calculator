import React from 'react';
import { render } from 'react-dom';
import './Display.css';

const Display = props => (
	<div className="display">
		<div className="result">{props.value}</div>
	</div>
);

export default Display;
