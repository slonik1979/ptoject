import Myposts from './MyPosts/Myposts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ postsData }) => {
  return (
    <div>
      <ProfileInfo />
      <Myposts postsData={postsData} />
    </div>
  );
};

export default Profile;
