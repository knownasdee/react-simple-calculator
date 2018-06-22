import React from 'react';
import { string, func } from 'prop-types';
import './Key.css';

const Key = props => (
  <button className={`key ${props.className}`} onClick={props.handleClick}>
    {props.keyValue}
  </button>
);

Key.propTypes = {
  keyValue: string.isRequired,
  handleClick: func.isRequired,
  className: string.isRequired
};

export default Key;
