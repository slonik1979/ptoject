import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
