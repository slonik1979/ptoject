import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.state.postsData.map((el) => {
    return <Post message={el.message} like={el.like} />;
  });

  // let addPost1 = () => {
  //   return (props.addPost);

  // }

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  let onPostChange = () => {};

  return (
    <div className={s.myPost}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onPostChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>News posts</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
