import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
  let patch = '/dialog/' + id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink NavLink to={patch}>
        {name}
      </NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id="1" name="Peter" />
        <DialogItem id="2" name="Sveta" />
        <DialogItem id="3" name="Mikle" />
        <DialogItem id="4" name="Darina" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Fuck" />
        <Message message="Привет" />
      </div>
    </div>
  );
};

export default Dialogs;
