import React from 'react';
import s from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({ state }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts state={state} />
    </div>
  );
};

export default Profile;
