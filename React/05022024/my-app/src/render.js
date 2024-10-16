import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { addMessage, addPost,  addProduct,  updateNewMessageText, updateNewPostText, updateNewProductName } from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(<App state={state}
                   
                   addPost={addPost}
                   updateNewPostText={updateNewPostText}
                   addMessage={addMessage}
                   updateNewMessageText={updateNewMessageText}
                   addProduct={addProduct} 
                   updateNewProductName={updateNewProductName}/>);
};




