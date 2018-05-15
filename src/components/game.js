import React from 'react';

import Result from './result';
import Guess from './guess';
import GuessList from './guessList';

import './game.css';
import './guess.css';
import './guessList.css';
import './result.css';

export default function Game(props) {
  return (
    <div className="game">
      <Result />
      <Guess />
      <GuessList />
    </div>
  );
}