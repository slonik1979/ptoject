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

let newsData = [
  {id: 1, name:"Россия"},
  {id: 2, name:"США"},
]

let misicData = [
  {id: 1, name:"Попса"},
  {id: 2, name:"Рэп"},
  {id: 3, name:"80-е"},
 
]

let goodsData = [
  {id: 1, name:"Пиво", price: 150},
  {id: 2, name:"Чипсы", price: 75},
  {id: 3, name:"Рыба", price: 750},
 
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App
    myPostsData={myPostsData}
    dialogsData={dialogsData}
    messagesData={messagesData}
    newsData={newsData}
    misicData={misicData}
    goodsData={goodsData}
  />
);
