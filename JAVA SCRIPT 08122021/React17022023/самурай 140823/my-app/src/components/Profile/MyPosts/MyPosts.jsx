import React from 'react';
import s from './MyPosts.module.css';

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
      <div className={s.posts}></div>
    </div>
  );
};

export default MyPosts;
