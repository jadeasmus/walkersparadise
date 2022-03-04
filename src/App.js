import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './full_logo.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* left */}
        <div className="logo">
          < Logo className="logo-svg"/>
        </div>

        {/* right */}
        <div className="pagination">
          <span>
            <a className="pagination-link">
              Home
            </a>
            <a className="pagination-link">
              About
            </a>
            <a className="pagination-link-nr">
              New Route
            </a>
          </span>
        </div>
      </header>

      <div className="map-container">
        <h1 className="text">COMING SOON</h1>
      </div>


    </div>
  );
}

export default App;
