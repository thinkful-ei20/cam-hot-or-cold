import React from 'react';

import './guess.css';

export default function Guess() {
  return (
    <div className="guess">
      <form>
        <input type="text" class="enterGuess" placeholder="Enter your Guess" />
        <input type="submit" class="button" placeholder="Guess" value="Guess" />
      </form>
      <p> 
        Guess #
        <span id="count">0</span> 
        !
        </p>
    </div>
  );
}