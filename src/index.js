import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/components/App';
import { Subtitle } from "./App/components/Subtitle";
import { Login } from "./App/components/Login";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Subtitle />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);


