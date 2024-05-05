import React from 'react';
import classes from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let aaa = 'dialogs/' + props.id;
  let bbb = props.name;
  return (
    <div className={classes.dialog}>
      <NavLink to={aaa}>{bbb}</NavLink>
    </div>
  );
};

export default DialogItem;
