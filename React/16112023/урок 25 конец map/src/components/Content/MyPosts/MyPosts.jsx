import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {

  let messagesData = [
    {id: 1, name: "Привет", like: 15},
    {id: 2, name: "Как дела", like: 25},
    {id: 3, name: "Здорово", like: 10},
  ]

  let messagesElement = messagesData.map( el => <Post message={el.name} like={el.like} /> )

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
        {messagesElement}
      </div>
    </div>
  );
};

export default MyPosts;
