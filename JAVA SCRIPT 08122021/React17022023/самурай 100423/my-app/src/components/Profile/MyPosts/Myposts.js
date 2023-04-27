import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
  return (
    <div className={s.postBlock}>
      <h3>My post </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={s.button_Block}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Привет" like="10" />
        <Post message="Как дела?" like="15" />
        <Post message="Все хорошо" like="5" />
        <Post message="Что делаешь?" like="20" />
      </div>
    </div>
  );
};

export default Myposts;
