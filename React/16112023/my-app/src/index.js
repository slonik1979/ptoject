import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let myPostsData = [
  { id: 1, message: 'Привет', like: '15' },
  { id: 2, message: 'Как дела', like: '25' },
];

let dialogsData = [
  { id: 1, name: 'Max' },
  { id: 2, name: 'Petr' },
  { id: 3, name: 'Mikle' },
  { id: 4, name: 'Denis' },
];

let messagesData = [
  { id: 1, message: 'Привет' },
  { id: 2, message: 'Как дела?' },
  { id: 3, message: 'Круто' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App
    myPostsData={myPostsData}
    dialogsData={dialogsData}
    messagesData={messagesData}
  />
);
