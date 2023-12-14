import React from 'react';
import './Content.css';
import Post from './MyPosts/Post/Post';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
  return (
    <div className="content">
      <div>
        <img src="https://cdn.auckland.ac.nz/aem/content/auckland/en/news/2022/06/08/how-nz-can-live-up-to-clean-green-image/jcr:content/leftpar/imagecomponent/image.img.1024.medium.jpg/1654727864784.jpg" />
      </div>
      <div>Avatar + desc</div>
     <MyPosts/>
      
    </div>
  );
};

export default Content;
