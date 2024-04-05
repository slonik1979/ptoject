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
    
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
   
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <MyPosts addPost={addPost} posts={props.posts} dispatch={props.dispatch} 
    newPostText={props.newPostText} updateNewPostText={onPostChange}
    />

  );
};

export default MyPostsContainer;
