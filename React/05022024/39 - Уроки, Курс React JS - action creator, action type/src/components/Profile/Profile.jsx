
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
      newPostText={props.newPostText}
      dispatch={props.dispatch}
      //updateNewPostText={props.updateNewPostText}
       />
    </div>
  );
};

export default Profile;
