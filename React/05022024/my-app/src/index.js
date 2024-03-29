
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store, { addMessage, addPost,  addProduct,  subscribe,  updateNewMessageText, updateNewPostText, updateNewProductName } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    
    root.render
    
    (<App state={state}
                   
                   addPost={store.addPost.bind(store)}
                   updateNewPostText={store.updateNewPostText.bind(store)}
                   addMessage={store.addMessage.bind(store)}
                   updateNewMessageText={store.updateNewMessageText.bind(store)}
                   addProduct={store.addProduct.bind(store)} 
                   updateNewProductName={store.updateNewProductName.bind(store)}/>);
};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
