import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.postsData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  let onPostChange = () => {
    
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.desc}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.newPosts}>New posts</div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
