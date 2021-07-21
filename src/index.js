import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Subtitle} from './components/Subtitle';
import {Login} from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Subtitle />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

