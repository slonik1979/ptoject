import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let postData = [
  { id: 1, name: 'Привет', like: 15 },
  { id: 2, name: 'Как дела', like: 25 },
  { id: 3, name: 'Здорово', like: 10 },
];

let dialogsData = [
  {id: 1, name: "Inna"},
  {id: 2, name: "Eleha"},
  {id: 3, name: "Olga"},
]

let messagesData = [
  {id: 1, name: "Привет"},
  {id: 2, name: "Как дела"},
  {id: 3, name: "Здорово"},
]

let goodsData = [
  { id: 1, name: 'aplle', price: 10 },
  { id: 2, name: 'tea', price: 2 },
  { id: 3, name: 'butter', price: 5 },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App postData={postData} dialogsData={dialogsData} messagesData={messagesData} goodsData={goodsData}/>);
