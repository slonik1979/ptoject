import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreate,
} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {


  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreate(text));
  };

  return ( <MyPosts 
    updateNewPostText={onPostChange} 
    addPost={addPost} 
    postsData={props.postsData} 
    newPostText={props.newPostText}/>
   
  );
};

export default MyPostsContainer;
