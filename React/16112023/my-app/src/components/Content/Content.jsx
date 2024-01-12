import React from 'react';
import './Content.css';
import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = (props) => {
  return (
    <div className="content">
      <ContentInfo />
      <MyPosts
        posts={props.contentPage.posts}
        newPostText={props.contentPage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Content;
