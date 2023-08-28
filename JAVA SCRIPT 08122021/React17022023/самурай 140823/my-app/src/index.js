import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let postsData = [
  { id: 1, message: 'Hi', like: 15 },
  { id: 2, message: 'My names Maxim', like: 10 },
  { id: 3, message: 'Props', like: 52 },
];
root.render(
  <React.StrictMode>
    <App posts1={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
