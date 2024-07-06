# TicTacToe

## Overview
TicTacToe is a simple React application that allows users to play a game of TicTacToe on a 4x4 grid.

## Features
- 4x4 TicTacToe grid
- Interactive UI with clickable squares
- Displays the current player and the winner

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to play the game.

## Code Structure
- `src/TicTacToe.js`: Main component for the TicTacToe game.
- `src/TicTacToe.css`: CSS file for styling the TicTacToe game.

## Example Code
Here is a snippet of the main game logic:
```javascript
// projects/javascript/src/TicTacToe.js
import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleClick = (row, col) => {
    // Update the board state
    // Check for winner
    // Switch current player
  };

  return (
    <div>
      {/* Render the 4x4 grid */}
      {/* Display current player and winner */}
    </div>
  );
};

export default TicTacToe;