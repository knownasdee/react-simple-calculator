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
  handleClick: func
};

Key.defaultProps = {
  handleClick: function noop() {}
};

export default Key;
