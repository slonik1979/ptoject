import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { bindActionCreators, legacy_createStore } from 'redux';

import reducer from './reducer';

import App from './components/App';
import { Provider } from 'react-redux';

const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const { dispatch, subscribe, getState } = store;
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// update();
// subscribe(update);
