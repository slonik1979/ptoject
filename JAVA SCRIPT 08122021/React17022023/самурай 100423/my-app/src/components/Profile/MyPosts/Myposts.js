import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = ({ postsData }) => {
  let postsElement = postsData.map((el) => {
    return <Post message={el.message} like={el.like} />;
  });

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
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default Myposts;
