import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src="https://img.freepik.com/free-photo/a-colorful-hummingbird-with-a-colorful-background_1340-38746.jpg?w=2000" />
    </div>
    <div>ava + desc</div>
    <div>
      My posts
      <div>News posts</div>
      <div className=''>
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
      </div>
    </div>
  </div>
}

export default Profile;