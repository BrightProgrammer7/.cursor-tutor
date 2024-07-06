import React from 'react';
import ReactDOM from 'react-dom/client';
import TicTacToe from './TicTacToe'; // Import the TicTacToe component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <button onClick={() => alert('Hello World')}>Click me</button>
        <TicTacToe /> {/* Add the TicTacToe component */}
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);