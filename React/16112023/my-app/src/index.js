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
      addPost={store.addPost.bind(store)}
      updateNewPostText={store.updateNewPostText.bind(store)}
      addMessage={store.addMessage}
      updateNewMessageText={store.updateNewMessageText}
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
