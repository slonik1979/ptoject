import React from 'react';
import s from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './MyPosts/Post/Post';

const Profile = () => {
  let postsData = [
    { id: 1, message: 'Hi', like: 15 },
    { id: 1, message: 'My names Maxim', like: 10 },
  ];

  let postsElements = postsData.map((el) => {
    return <Post message={el.message} like={el.like} />;
  });

  return (
    <div className={s.content}>
      <ProfileInfo />
      {postsElements}
    </div>
  );
};

export default Profile;
