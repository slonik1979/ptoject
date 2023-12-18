import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let aaa = 'dialogs/' + props.id;
  let bbb = props.name;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={aaa}>{bbb}</NavLink>
    </div>
  );
};

const Mesagge = (props) => {
  return <div className={classes.message}>{props.name}</div>;
};

const Dialogs = () => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <DialogItem name="Inna" id="1" />
          <DialogItem name="Eleha" id="2" />
          <DialogItem name="Olga" id="3" />
        </div>
        <div className={classes.messages}>
          <Mesagge name="Привет" />
          <Mesagge name="Как дела" />
          <Mesagge name="Здорово" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
