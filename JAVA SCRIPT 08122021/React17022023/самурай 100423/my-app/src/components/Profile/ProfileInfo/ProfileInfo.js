import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://tinypng.com/images/social/website.jpg" />
      </div>
      <div className={s.descrBlock}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
