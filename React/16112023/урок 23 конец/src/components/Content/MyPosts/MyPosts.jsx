import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.myPostBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div className={classes.posts}>
        <Post message="Привет" like="15" />
        <Post message="Как дела" like="25" />
      </div>
    </div>
  );
};

export default MyPosts;
