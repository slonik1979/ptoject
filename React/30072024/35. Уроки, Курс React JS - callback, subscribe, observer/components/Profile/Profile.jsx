import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} updateNewPostText= {props.updateNewPostText} newPostText={props.profilePage.newPostText}/>
    </div>
  );
};

export default Profile;
