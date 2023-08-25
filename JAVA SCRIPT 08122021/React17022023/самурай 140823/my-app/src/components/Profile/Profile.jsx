import React from 'react';
import s from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = ({posts}) => {
  

  

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={{posts}}/>
    </div>
  );
};

export default Profile;
