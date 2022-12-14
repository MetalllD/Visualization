import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  
  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'"></meta>
  <script src="http://www.google.com/recaptcha/api.js?onload=myCallBack&render=explicit" async defer></script>
    <HashRouter>
      <Home />
    </HashRouter>
  
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
