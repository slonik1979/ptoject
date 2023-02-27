import s from './nav-bar.module.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <div className={`${s.item} ${s.active}`}>Profile</div>
      <div className={s.item}>Message</div>
      <div className={s.item}>News</div>
      <div className={s.item}>Music</div>
      <div className={s.item}>Setting</div>
    </nav>
  );
};

export default NavBar;
