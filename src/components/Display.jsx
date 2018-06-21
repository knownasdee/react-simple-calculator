import React from 'react';
import { string } from 'prop-types';
import './Display.css';

const MAX_HISTORY_LENGTH = 35;
const MAX_RESULT_LENGTH = 13;

const formatResult = result => {
  if (result.length > MAX_RESULT_LENGTH) return String(parseFloat(result).toExponential(3));
  return result;
};

const Display = props => (
  <div className="display">
    <div className="history-container">
      {props.history.length > MAX_HISTORY_LENGTH && <div>&lt;&lt;</div>}
      <div className="history">
        <bdi>{props.history}</bdi>
      </div>
    </div>
    <div className="result">{formatResult(props.value)}</div>
  </div>
);

Display.propTypes = {
  history: string,
  value: string
};

Display.defaultProps = {
  history: '',
  value: '0'
};

export default Display;
