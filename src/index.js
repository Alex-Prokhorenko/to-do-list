import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #333333;
    font-family: Georgia, serif;
    font-style: italic;
    border: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
