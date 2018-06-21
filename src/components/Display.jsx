import React from 'react';
import { string } from 'prop-types';
import { formatResult } from '../helper/logic';
import './Display.css';

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

Display.propTypes = {
  history: string,
  value: string
};

Display.defaultProps = {
  history: '',
  value: '0'
};

export default Display;
