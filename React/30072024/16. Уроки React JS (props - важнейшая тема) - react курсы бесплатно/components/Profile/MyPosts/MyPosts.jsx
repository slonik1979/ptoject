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
        <Post message="Привет" />
        <Post message="Как дела" />
        <Post message="Отлично" />
      </div>
    </div>
  );
};

export default MyPosts;
