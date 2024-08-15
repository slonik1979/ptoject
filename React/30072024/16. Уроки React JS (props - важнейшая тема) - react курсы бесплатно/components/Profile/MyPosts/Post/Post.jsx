import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://illustrators.ru/uploads/illustration/image/1381589/6.jpg" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
