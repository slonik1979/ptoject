import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src="https://img.freepik.com/free-photo/a-colorful-hummingbird-with-a-colorful-background_1340-38746.jpg?w=2000" />
    </div>
    <div>ava + desc</div>
   <MyPosts/>
  </div>
}

export default Profile;