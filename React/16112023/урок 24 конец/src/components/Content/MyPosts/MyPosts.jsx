import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {

  let messagesData = [
    {id: 1, name: "Привет", like: 15},
    {id: 2, name: "Как дела", like: 25},
    {id: 3, name: "Здорово", like: 10},
  ]

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
        <Post message={messagesData[0].name} like={messagesData[0].like} />
        <Post message={messagesData[1].name} like={messagesData[1].like} />
      </div>
    </div>
  );
};

export default MyPosts;
