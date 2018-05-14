import React from 'react';

import Game from './game'
import Title from './title'

import './board.css';
import './game.css';
import './title.css';

export default function Board(props) {
  return (
    <div className="board">
      <Title />
      <Game />
    </div>
  );
}