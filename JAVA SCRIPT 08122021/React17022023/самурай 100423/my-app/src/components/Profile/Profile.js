import Myposts from './MyPosts/Myposts';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div>
      <div>
        <img src="https://tinypng.com/images/social/website.jpg" />
      </div>
      <div>ava + descr</div>
     <Myposts/>
    </div>
    )
}

export default Profile;