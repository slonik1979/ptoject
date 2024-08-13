import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzeMhg4ycv1R2fRdGLNloURRYJYS2AgAL6g&s"></img>
      </div>
      <div>ava + desc</div>
      <div>
        My posts
        <div>New posts</div>
        <div>
          <div className={s.item}>post 1</div>
          <div className="item">post 2</div>
          <div className="item">post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
