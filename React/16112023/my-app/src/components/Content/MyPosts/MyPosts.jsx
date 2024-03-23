import React from 'react';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/state';

const MyPosts = (props) => {
  let newMyPostsData = props.myPostsData.map((el) => (
    <Post id={el.id} message={el.message} like={el.like} />
  ));

  let newPostElement = React.createRef();

  let addPost1 = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    const newLocal = updateNewPostTextActionCreator(text);
    props.dispatch(newLocal);
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
      <button onClick={addPost1}>Add post</button>
      <div>New post</div>
      {newMyPostsData}
    </div>
  );
};

export default MyPosts;
