import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzeMhg4ycv1R2fRdGLNloURRYJYS2AgAL6g&s"></img>
      </div>
      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
