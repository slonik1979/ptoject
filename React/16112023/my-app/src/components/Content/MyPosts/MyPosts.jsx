import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  let messagesElement = props.posts.map((el) => (
    <Post message={el.name} like={el.like} />
  ));

  let addPost = () => {
    alert('addPost');
  };

  return (
    <div className={classes.myPostBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>New post</div>
      <div className={classes.posts}>{messagesElement}</div>
    </div>
  );
};

export default MyPosts;
