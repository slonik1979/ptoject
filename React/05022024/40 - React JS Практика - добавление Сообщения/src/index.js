import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        store={store}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
        // addProduct={store.addProduct.bind(store)}
        // updateNewProductName={store.updateNewProductName.bind(store)}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
