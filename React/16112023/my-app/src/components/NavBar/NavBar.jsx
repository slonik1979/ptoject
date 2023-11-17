import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a href='/dialogs'>Message</a>
      </div>
      <div className={classes.item}>
        <a href='/news'>News</a>
      </div>
      <div className={classes.item}>
        <a href='/music'>Music</a>
      </div>
    </nav>
  );
};

export default NavBar;
