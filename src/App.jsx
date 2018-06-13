import React from 'react';
import { render } from 'react-dom';

import './App.css';

const Calculator = () => (
	<div className="calculator">
		<div>smth</div>
	</div>
);

const renderApp = () => {
	render(<Calculator />, document.getElementById('app'));
};
renderApp();
