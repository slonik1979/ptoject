import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" />
        Profile
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
