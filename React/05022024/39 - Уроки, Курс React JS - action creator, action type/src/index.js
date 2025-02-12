import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
      // updateNewPostText={store.updateNewPostText.bind(store)}
      // addMessage={store.addMessage.bind(store)}
      // updateNewMessageText={store.updateNewMessageText.bind(store)}
      // addProduct={store.addProduct.bind(store)}
      // updateNewProductName={store.updateNewProductName.bind(store)}
    />
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
