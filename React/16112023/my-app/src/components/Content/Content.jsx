import React from 'react';
import classes from './Content.module.css';

import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = ({ profilePage, addPost }) => {
  return (
    <div className={classes.content}>
      <ContentInfo />
      <MyPosts
        myPostsData={profilePage.myPostsData}
        addPost={addPost}
        newPostText={profilePage.newPostText}
      />
    </div>
  );
};

export default Content;
