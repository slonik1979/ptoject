import React from 'react';
import classes from './Content.module.css';

import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = (proprs) => {
  return (
    <div className={classes.content}>
      <ContentInfo />
      <MyPosts
        myPostsData={this.props.profilePage.myPostsData}
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
        
      />
    </div>
  );
};

export default Content;
