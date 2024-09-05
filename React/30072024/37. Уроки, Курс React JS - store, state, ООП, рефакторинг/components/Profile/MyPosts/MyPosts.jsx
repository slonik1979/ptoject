import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.postsData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
      props.addPost();
   };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts