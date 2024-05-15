import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://cdn1.flamp.ru/f735b37894df0305765b7b1c981171c0_300_300.jpg" />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
