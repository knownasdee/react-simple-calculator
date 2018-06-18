import React, { Component } from 'react';
import { render } from 'react-dom';
import './Key.css';

const Key = props => (
	<button className="key" onClick={props.handleClick}>
		{props.keyValue}
	</button>
);

export default Key;
