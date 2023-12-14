import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <div className={classes.dialog + ' ' + classes.active}>Inna</div>
          <div className={classes.dialog}>Elena</div>
          <div className={classes.dialog}>Olga</div>
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
