import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  let messagesElement = props.postData.map((el) => (
    <Post message={el.name} like={el.like} />
  ));

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
      <div className={classes.posts}>{messagesElement}</div>
    </div>
  );
};

export default MyPosts;
