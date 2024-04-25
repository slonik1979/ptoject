import store from '../../redux/store';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        posts={props.profilePage.posts}
        newPostText={props.newPostText}
        //dispatch={props.dispatch}
        //updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
