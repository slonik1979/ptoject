import React from 'react';
import classes from './Dialogs.module.css';

import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = ({ state }) => {
  let newDialogsData = state.dialogsData.map((el) => (
    <DialogsItems id={el.id} name={el.name} />
  ));

  let newMessagesData = state.messagesData.map((el) => (
    <Message id={el.id} message={el.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{newDialogsData}</div>
      <div className={classes.messages}>{newMessagesData}</div>
    </div>
  );
};

export default Dialogs;
