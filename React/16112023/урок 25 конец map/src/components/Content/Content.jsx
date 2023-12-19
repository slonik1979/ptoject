import React from 'react';
import './Content.css';
import MyPosts from './MyPosts/MyPosts';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = () => {
  return (
    <div className="content">
      <ContentInfo />
      <MyPosts />
    </div>
  );
};

export default Content;
