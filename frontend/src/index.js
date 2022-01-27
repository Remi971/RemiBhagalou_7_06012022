import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Connect from './components/Connect';
import Forum from './components/Forum';
import './styles/index.css'

import reportWebVitals from './reportWebVitals';

export const theme = {
  colors : {
      primary: '#FD2D01',
      secondary: '#091F43',
      bgLight : 'lightgrey',
      bgDark: 'grey'
  }
} 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Connect how='login' />} />
        <Route path="/signup" element={<Connect how='signup' />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
