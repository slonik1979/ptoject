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

let dialogsData = [
  {id: 1, name: "Inna"},
  {id: 2, name: "Eleha"},
  {id: 3, name: "Olga"},
]

let messagesData = [
  {id: 1, name: "Привет"},
  {id: 2, name: "Как дела"},
  {id: 3, name: "Здорово"},
]

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        </div>
        <div className={classes.messages}>
          <Mesagge name={messagesData[0].name} />
          <Mesagge name={messagesData[1].name} />
          <Mesagge name={messagesData[2].name} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
