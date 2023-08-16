import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>News posts</div>
      <div className={s.posts}>
        <Post message="Hi" like="15" />
        <Post message="My names Maxim" like="10" />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
