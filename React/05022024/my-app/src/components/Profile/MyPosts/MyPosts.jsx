import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

  
  const postsElements = props.posts.map((post) => {
    return <Post message={post.message} like={post.like} id={post.id} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
    
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
    
  };

  return (
    <div>
      My posts
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
        ></textarea>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
