import React from 'react';

import Result from './result';

import './game.css';
import './result.css';

export default function Game(props) {
  return (
    <div className="game">
      <Result />
    </div>
  );
}