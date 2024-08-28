import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.desc}>
      <h3>My posts</h3>
      
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
        
        
      </div>
      <div className={s.newPosts}>New posts</div>
      <div className={s.posts}>
        <Post message="Привет" likesCount="0" />
        <Post message="Как дела" likesCount="23" />
        <Post message="Отлично" likesCount="5" />
      </div>
    </div>
  );
};

export default MyPosts;
