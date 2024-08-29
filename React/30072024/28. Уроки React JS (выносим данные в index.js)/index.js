import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message:'Привет', likesCount: 12},
  {id: 2, message:'Как дела', likesCount: 1},
  {id: 3, message:'Отлично', likesCount: 121}
] 

let dialogsData = [
  { id: 1, name: 'Дмитрий' },
  { id: 2, name: 'Андрей' },
  { id: 3, name: 'Света' },
  { id: 4, name: 'Саша' },
];

let messagesData = [
  { id: 1, message: 'Привет' },
  { id: 2, message: 'Пока' },
  { id: 3, message: 'Хай' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
