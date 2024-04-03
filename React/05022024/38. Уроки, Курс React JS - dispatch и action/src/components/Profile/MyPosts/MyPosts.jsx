import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => {
    return <Post message={post.message} like={post.like} id={post.id} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
      //props.addPost();
      props.dispatch({type:'ADD-POST'})
   }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST-TEXT', newText: text}
    props.dispatch(action)
  }

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange}
        value={props.newPostText}
        ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
