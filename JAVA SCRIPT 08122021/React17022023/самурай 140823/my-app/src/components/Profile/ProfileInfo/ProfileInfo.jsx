import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div className={s.profileinfo}>
      <div>
      <img src="https://img.freepik.com/free-photo/a-colorful-hummingbird-with-a-colorful-background_1340-38746.jpg?w=2000" />
    </div>
    <div className={s.desc}>ava + desc</div>
  </div>
}

export default ProfileInfo;