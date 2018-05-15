import React from 'react';

import Game from './game';
import NewGame from './newGame';
import Title from './title';
import What from './what';

import './board.css';
import './game.css';
import './newGame.css';
import './title.css';
import './what.css';

export default function Board(props) {
  return (
    <div className="board">
      <header>
        <nav>
          <What />
          <NewGame />
        </nav>
      </header>

      <Title />

      <section className="game">
        <Game />  
      </section>
    </div>
  );
}