import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';


  

const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = () => {
  root.render(
    <App
      appState={store.getState()}
      addPost={store.dispatch.bind(store)}
      updateNewPostText={store.dispatch.bind(store)}
      addMessage={store.addMessage.bind(store)}
      updateNewMessageText={store.updateNewMessageText.bind(store)}
      // myPostsData={myPostsData}
      // dialogsData={dialogsData}
      // messagesData={messagesData}
      // newsData={newsData}
      // misicData={misicData}
      // goodsData={goodsData}
    />
  );
};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
