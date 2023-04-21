import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const statusActive = ({isActive}) => ({color: isActive ? 'chartreuse' : ''});

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" style={statusActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="/dialogs" style={statusActive}>Messages</NavLink>
        
      </div>
      <div className={s.item}>
      <NavLink to="/News" style={statusActive}>News</NavLink>
    
      </div>
      <div className={s.item}>
      <NavLink to="/Music" style={statusActive}>Music</NavLink>
      
      </div>
      <div className={s.item}>
      <NavLink to="/Settings" style={statusActive}>Settings</NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
