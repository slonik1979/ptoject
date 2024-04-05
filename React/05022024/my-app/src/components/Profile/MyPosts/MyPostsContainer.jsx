import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  //let state = props.store.getState();
 
  let addPost = () => {
    
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
   
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts addPost={addPost} posts={props.posts} dispatch={props.dispatch} 
    newPostText={props.newPostText} updateNewPostText={onPostChange}
    />

  );
};

export default MyPostsContainer;
