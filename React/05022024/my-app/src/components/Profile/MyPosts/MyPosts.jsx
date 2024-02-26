import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => {
    return <Post message={post.message} like={post.like} id={post.id} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    text = newPostElement.current.value = '';
  };

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement} value="1111" />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
