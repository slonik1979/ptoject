import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts}) => {

  let postsElements = posts.map((el) => {
    return <Post message={el.message} like={el.like} />;
  });

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
