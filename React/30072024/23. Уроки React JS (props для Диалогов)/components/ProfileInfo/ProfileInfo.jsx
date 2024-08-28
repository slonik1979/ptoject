
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.img}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzeMhg4ycv1R2fRdGLNloURRYJYS2AgAL6g&s"></img>
      </div>
      <div className={s.desc}>ava + desc</div>
  
    </div>
  );
};

export default ProfileInfo;
