import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/message"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/setting"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
