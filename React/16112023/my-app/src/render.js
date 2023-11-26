import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';

export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App
      appState={state}
      addPost={addPost}
      // myPostsData={myPostsData}
      // dialogsData={dialogsData}
      // messagesData={messagesData}
      // newsData={newsData}
      // misicData={misicData}
      // goodsData={goodsData}
    />
  );
};
