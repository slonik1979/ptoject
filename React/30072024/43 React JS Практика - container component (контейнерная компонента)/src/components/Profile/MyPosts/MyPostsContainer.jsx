import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreate,
} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  
  let addPost = () => {
    props.addPost();
    //props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    
    props.dispatch(updateNewPostTextActionCreate(text));
  };

 
  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={props.postsData}/>
  );
};

export default MyPostsContainer;
