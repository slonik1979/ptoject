import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
  let patch = '/dialog/' + id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink
        NavLink
        to={patch}
        className={(navData) => (navData.isActive ? s.active : s.item)}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
