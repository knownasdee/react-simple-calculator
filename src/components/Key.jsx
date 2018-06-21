import React from 'react';
import { string, func } from 'prop-types';
import './Key.css';

const Key = props => (
  <button className="key" onClick={props.handleClick}>
    {props.keyValue}
  </button>
);

Key.propTypes = {
  keyValue: string.isRequired,
  handleClick: func.isRequired
};

export default Key;
