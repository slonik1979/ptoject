import React from 'react';
import classes from './Dialogs.module.css';

import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItems id="1" name="Max" />
        <DialogsItems id="2" name="Petr" />
        <DialogsItems id="3" name="Mikle" />
      </div>
      <div className={classes.messages}>
        <Message message="Привет" />
        <Message message="Как дела?" />
        <Message message="Круто" />
      </div>
    </div>
  );
};

export default Dialogs;
