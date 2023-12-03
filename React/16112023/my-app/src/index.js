import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App
        appState={store.getState()}
        dispatch={store.dispatch.bind(store)}
        // addMessage={store.dispatch.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
        // myPostsData={myPostsData}
        // dialogsData={dialogsData}
        // messagesData={messagesData}
        // newsData={newsData}
        // misicData={misicData}
        // goodsData={goodsData}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
