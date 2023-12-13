import React from 'react';
import classes from './DialogsItems.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItems = ({ id, name }) => {
  let patch = '/dialogs/' + id;
  return (
    <div className={classes.dialog}>
      <NavLink to={patch}>{name}</NavLink>
    </div>
  );
};

export default DialogsItems;
