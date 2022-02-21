import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Connect from './components/Connect';
import Forum from './components/Forum';
import {StyledInfoUser} from './styles/InfoUser.style';
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

export const getTime = (d) => {
  const newTime = (Date.now() - new Date(d));
  const minutes = Math.trunc(newTime/60000);
  const heures = Math.trunc(newTime/3600000);
  const jours = Math.trunc(newTime/86400000);
  const mois = Math.trunc(newTime/2592000000);
  const annees = Math.trunc(newTime/31536000000);
  if (minutes === 0) {
      return "moins d'une minute"
  } else if (minutes > 0 & heures === 0) {
      return `${minutes} min`
  } else if (heures > 0 & jours === 0) {
      return `${heures} h`
  } else if (jours > 0 & mois === 0) {
      return `${jours} j`
  }else if (mois > 0 & annees === 0) {
      return `${mois} mois et ${jours} j`
  } else if (annees > 0) {
    return `${annees} ans ${mois > 0 ? mois + ' mois' : heures + ' h'} `
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Connect how='login' />} />
        <Route path="/signup" element={<Connect how='signup' />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/infoUser" element={<StyledInfoUser/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
