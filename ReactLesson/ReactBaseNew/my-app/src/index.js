import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const max = 'Привет Макс';

const elem = (
  <div>
    <h2 className='text'>Текст: {max}</h2>
    <input type="text" />
    <button>Click</button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
