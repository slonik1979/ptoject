import React from 'react';
import classes from './Dialogs.module.css';

import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Petr' },
    { id: 3, name: 'Mikle' },
    { id: 4, name: 'Denis' },
  ];

  let messagesData = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'Круто' },
  ];

  let newDialogsData = dialogsData.map((el) => (
    <DialogsItems id={el.id} name={el.name} />
  ));

  let newMessagesData = messagesData.map((el) => (
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
