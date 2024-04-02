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
      addPost={store.addPost}
      updateNewPostText={store.updateNewPostText}
      addMessage={store.addMessage}
      updateNewMessageText={store.updateNewMessageText}
      addProduct={store.addProduct}
      updateNewProductName={store.updateNewProductName}
    />
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
