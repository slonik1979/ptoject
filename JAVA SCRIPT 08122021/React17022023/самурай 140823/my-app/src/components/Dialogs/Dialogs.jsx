import React from 'react';
import s from './Dialogs.module.css';
import Message from './Messege/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = ({ state }) => {
  let dialogsElements = state.dialogsData.map((el) => {
    return <DialogItem id={el.id} name={el.name} />;
  });

  let messagesElements = state.messagesData.map((el) => {
    return <Message message={el.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
