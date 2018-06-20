import React, { Component } from 'react';
import { render } from 'react-dom';
import { string, func } from 'prop-types';
import './Key.css';

const Key = props => (
	<button className="key" onClick={props.handleClick}>
		{props.keyValue}
	</button>
);

Key.propTypes = {
	keyValue: string,
	handleClick: func
};

export default Key;
