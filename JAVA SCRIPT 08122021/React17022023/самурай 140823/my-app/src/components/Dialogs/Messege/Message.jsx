import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Message = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: "Peter"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Mikle"},
    {id: 4, name: "Darina"},
  ]

  let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Fuck"},
    {id: 3, message: "Привет"},
  ]

  let dialogsElements = dialogsData.map ((el) => {
    return <DialogItem id={el.id} name={el.name} />
  })

  let messagesElements = messagesData.map ((el) => {
    return       <Message message={el.message} />
  })
 
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Message;
