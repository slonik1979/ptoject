import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
         <NavLink to='/dialog/1'>Sergio</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialog/2'>Sveta</NavLink></div>
        <div className={s.dialog}>
          
        </div>
        <div className={s.dialog}>
        <NavLink to='/dialog/3'>Darina</NavLink>
        </div>
        
      </div>
      <div className={s.messeges}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Fuck</div>
        <div className={s.message}>Привет</div>
      </div>
    </div>
  );
};

export default Dialogs;
