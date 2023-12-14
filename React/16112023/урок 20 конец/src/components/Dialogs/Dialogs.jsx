import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to="dialogs/1">Inna</NavLink>
          </div>
          <div className={classes.dialog}>
            <NavLink to="dialogs/2">Elena</NavLink>
          </div>
          <div className={classes.dialog}>
            <NavLink to="dialogs/2">Olga</NavLink>
          </div>
        </div>
        <div className={classes.messages}>
          <div className={classes.message}>Привет</div>
          <div className={classes.message}>Как дела</div>
          <div className={classes.message}>Здорово</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
