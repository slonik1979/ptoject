import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { bindActionCreators, legacy_createStore } from 'redux';
import * as actions from './action';
import reducer from './reducer';


const store = legacy_createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

subscribe(update);


const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

//let state = reducer(intialState, { type: 'INC' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
