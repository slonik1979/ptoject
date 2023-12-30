import React from 'react';
import './Content.css';
import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = (props) => {
  return (
    <div className="content">
      <ContentInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

export default Content;
