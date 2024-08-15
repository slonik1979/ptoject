import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://illustrators.ru/uploads/illustration/image/1381589/6.jpg" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
