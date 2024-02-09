import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {message: "Привет", id: 1, like: 10},
  {message: "Пока", id: 2, like: 25},
]

let dialogs = [
  { name: 'Иван', id: 1 },
  { name: 'Николай', id: 2 },
  { name: 'Света', id: 3 },
];

let messages = [
  { message: 'Иван', id: 1 },
  { message: 'Как дела', id: 2 },
  { message: 'Как Вас зовут', id: 3 },
];

const products = [
  { id: 1, product: 'Яблоки', price: 250, discount: 10 },
  { id: 2, product: 'Бананы', price: 150, discount: 10 },
  { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  { id: 3, product: 'Мандарины', price: 100, discount: 10 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} products={products} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
