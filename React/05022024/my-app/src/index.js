
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { addMessage, addPost,  addProduct,  subscribe,  updateNewMessageText, updateNewPostText, updateNewProductName } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    
    root.render
    
    (<App state={state}
                   
                   addPost={addPost}
                   updateNewPostText={updateNewPostText}
                   addMessage={addMessage}
                   updateNewMessageText={updateNewMessageText}
                   addProduct={addProduct} 
                   updateNewProductName={updateNewProductName}/>);
};


rerenderEntireTree(state);

subscribe(rerenderEntireTree);
