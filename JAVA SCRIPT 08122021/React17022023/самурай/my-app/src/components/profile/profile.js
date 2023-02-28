import s from './profile.module.css';
import Post from './MyPosts/Post/post';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.img}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWv-TxW1o4uq321qA2W4ISMiHZklZURmCJQ&usqp=CAU" />
      </div>
      <div>
        avatar + descr
      </div>
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>New post</div>
        <div className={s.posts}>
          <Post message='Hi' like='15'/>
          <Post message='My names Peter' like='10'/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
