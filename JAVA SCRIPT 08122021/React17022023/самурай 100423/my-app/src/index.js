import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { message: 'Привет', like: '10' },
  { message: 'Как дела?', like: '15' },
  { message: 'Все хорошо', like: '5' },
  { message: 'Что делаешь?', like: '20' },
];

let dialogsData = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Mike' },
  { id: 4, name: 'Victor' },
];

let messegesData = [
  { id: 1, messege: 'Hi' },
  { id: 2, messege: 'Hi2' },
  { id: 3, messege: 'Hi3' },
  { id: 4, messege: 'Hi4' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messegesData={messegesData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
