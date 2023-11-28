import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <App
      appState={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      // myPostsData={myPostsData}
      // dialogsData={dialogsData}
      // messagesData={messagesData}
      // newsData={newsData}
      // misicData={misicData}
      // goodsData={goodsData}
    />
  );
};
