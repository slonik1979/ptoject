import s from './profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.img}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWv-TxW1o4uq321qA2W4ISMiHZklZURmCJQ&usqp=CAU" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2U111p3Zn5l3ZurcpiOzfZOOhBrmqc7zinA&usqp=CAU" />
        avatar + descr
      </div>
      <div>
        My post
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
