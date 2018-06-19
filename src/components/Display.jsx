import React from 'react';
import { render } from 'react-dom';
import './Display.css';
import { formatResult } from '../helper/keypadConfig';

const Display = props => (
	<div className="display">
		<div className="history-container">
			{props.history.length > 35 && <div>&lt;&lt;</div>}
			<div className="history">
				<bdi>{props.history}</bdi>
			</div>
		</div>
		<div className="result">{formatResult(props.value)}</div>
	</div>
);

export default Display;
