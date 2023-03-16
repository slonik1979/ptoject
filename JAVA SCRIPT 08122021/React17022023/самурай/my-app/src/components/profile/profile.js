import s from './profile.module.css';
import Post from './MyPosts/Post/post';

const Profile = ({postData}) => {

 

   const postsElements = postData.map((el) => (
    <Post message={el.message} id={el.id} like={el.like}/>
   ))


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
          {postsElements}
          {postsElements}
        </div>
      </div>
    </div>
  );
};

export default Profile;
