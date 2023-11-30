import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {    
  addMessage,
  addPost,
  subscribe,
  updateNewMessageText,
  updateNewPostText,
} from './redux/state';


  

const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = () => {
  root.render(
    <App
      appState={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
      // myPostsData={myPostsData}
      // dialogsData={dialogsData}
      // messagesData={messagesData}
      // newsData={newsData}
      // misicData={misicData}
      // goodsData={goodsData}
    />
  );
};


rerenderEntireTree();

subscribe(rerenderEntireTree);
