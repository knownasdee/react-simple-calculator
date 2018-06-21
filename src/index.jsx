import React from 'react';
import { render } from 'react-dom';
import Calculator from './components/Calculator';
import './index.css';

const App = () => (
  <div className="app">
    <Calculator />
  </div>
);

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();
