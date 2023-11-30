import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  let newMyPostsData = props.myPostsData.map((el) => (
    <Post id={el.id} message={el.message} like={el.like} />
  ));

  let newPostElement = React.createRef();

  let addPost1 = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
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
