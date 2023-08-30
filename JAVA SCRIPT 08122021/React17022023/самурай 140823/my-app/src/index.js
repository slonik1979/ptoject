import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Hi', like: 15 },
  { id: 2, message: 'My names Maxim', like: 10 },
  { id: 3, message: 'Props', like: 52 },
];

let dialogsData = [
  { id: 1, name: 'Peter' },
  { id: 2, name: 'Sveta' },
  { id: 3, name: 'Mikle' },
  { id: 4, name: 'Darina' },
];

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Fuck' },
  { id: 3, message: 'Привет' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
