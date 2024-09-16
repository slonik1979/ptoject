import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // postsData={props.profilePage.postsData}
        // dispatch={props.dispatch}
        // newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
