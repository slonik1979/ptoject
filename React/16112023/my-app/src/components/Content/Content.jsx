import React from 'react';
import classes from './Content.module.css';

import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = ({ myPostsData }) => {
  return (
    <div className={classes.content}>
      <ContentInfo />
      <MyPosts myPostsData={myPostsData} />
    </div>
  );
};

export default Content;
