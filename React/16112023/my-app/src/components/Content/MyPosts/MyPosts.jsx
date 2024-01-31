import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/state';

const MyPosts = (props) => {
  let messagesElement = props.posts.map((el) => (
    <Post message={el.name} like={el.like} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.myPostBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
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
