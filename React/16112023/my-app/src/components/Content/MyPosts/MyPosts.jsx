import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
  let myPostsData = [
    { id: 1, message: 'Привет', like: '15' },
    { id: 2, message: 'Как дела', like: '25' },
  ];

  let newMyPostsData = myPostsData.map((el) => (
    <Post id={el.id} message={el.message} like={el.like} />
  ));

  return (
    <div l>
      <textarea></textarea>
      <button>Add post</button>
      <div>New post</div>
      {newMyPostsData}
    </div>
  );
};

export default MyPosts;
