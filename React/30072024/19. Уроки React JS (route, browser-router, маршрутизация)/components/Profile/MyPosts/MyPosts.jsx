import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>New posts</div>
      <div>
        <Post message="Привет" likesCount="0" />
        <Post message="Как дела" likesCount="23" />
        <Post message="Отлично" likesCount="5" />
      </div>
    </div>
  );
};

export default MyPosts;
