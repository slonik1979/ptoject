import React from 'react';
import s from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({ posts2 }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts3={posts2} />
    </div>
  );
};

export default Profile;
