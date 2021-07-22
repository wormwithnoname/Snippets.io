import React from 'react';
import './App.css';
import Logo from './assets/snippetslogo.png';
import Subtitle from './pages/Subtitle';
import Login  from './pages/Login';



function App() {
  return (
    <div className="App">
      <div className="App-bg">
        <img className="App-logo" src={Logo} alt="" />
        <title className="App-title">
          Snippets.io
        </title>
        <Subtitle />
        <Login />
      </div>
    </div>
  );
}

export default App;