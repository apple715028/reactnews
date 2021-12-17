import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jump from "./router/Jump";
import reportWebVitals from './reportWebVitals';
import './scss/layout.scss'
ReactDOM.render(
  <React.Fragment>
    <Jump/>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
