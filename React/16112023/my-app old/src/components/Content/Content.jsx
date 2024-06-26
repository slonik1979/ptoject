import React from 'react';
import classes from './Content.module.css';

import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = (props) => {
  return (
    <div className={classes.content}>
      <ContentInfo />
      <MyPosts
        myPostsData={props.profilePage.myPostsData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Content;
