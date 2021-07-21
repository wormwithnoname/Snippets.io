import React from 'react';
import './App.css';
import Logo from './assets/snippetslogo.png';


function App() {
  return (
    <div className="App">
        <div className="App-bg">
        <img className="App-logo" src={Logo} alt="" />
        <title className="App-title">
          Snippets.io
        </title>
      </div>
    </div>
  );
}

export default App;
