import React from 'react';
import classes from './Content.module.css';

import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = ({ state, addPost }) => {
  return (
    <div className={classes.content}>
      <ContentInfo />
      <MyPosts myPostsData={state.myPostsData} addPost={addPost}/>
    </div>
  );
};

export default Content;
