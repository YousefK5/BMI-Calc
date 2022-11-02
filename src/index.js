import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     {/* <Header name="Ahmed"/> */}
//     <App />
//     {/* <Footer year='2022'/> */}
//   </React.StrictMode>
// );

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
