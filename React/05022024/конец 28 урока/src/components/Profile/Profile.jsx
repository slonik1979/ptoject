import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


  return (
    <div>
      <ProfileInfo />
      <MyPosts{...props} />
    </div>
  );
};

export default Profile;
