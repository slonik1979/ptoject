import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {

  let myPostsData = [
    {id: 1, message: 'Привет', like:"15"},
    {id: 2, message: 'Как дела', like:"25"}
  ]

  return (
    <div l>
      <textarea></textarea>
      <button>Add post</button>
      <div>New post</div>
      <Post message={myPostsData[0].message} like="15" />
      <Post message="Как дела" like="25" />
    </div>
  );
};

export default MyPosts;
