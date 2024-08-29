import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
  
 
  return (
    <div>
    
     <ProfileInfo/>
      <MyPosts postsData={props.postsData} />
    </div>
  );
};

export default Profile;
