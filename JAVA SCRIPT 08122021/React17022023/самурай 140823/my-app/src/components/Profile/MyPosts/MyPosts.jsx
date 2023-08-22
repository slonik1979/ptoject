import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.myPost}>
      <h3>My posts</h3> 
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>
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
