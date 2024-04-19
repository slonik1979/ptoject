import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { bindActionCreators, legacy_createStore } from 'redux';
import * as actions from './action';
import reducer from './reducer';
import Counter from './components/Counter';

const store = legacy_createStore(reducer);

const { dispatch, subscribe, getState } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Counter
        counter={getState().value}
        inc={inc}
        dec={dec}
        rnd={() => {
          const value = Math.floor(Math.random() * 10);
          rnd(value);
        }}
      />
    </React.StrictMode>
  );
};

update();
subscribe(update);
