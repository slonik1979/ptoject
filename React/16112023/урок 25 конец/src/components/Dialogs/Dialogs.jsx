import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let aaa = 'dialogs/' + props.id;
  let bbb = props.name;
  return (
    <div className={classes.dialog}>
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

  let dialogsElement = dialogsData.map( el => <DialogItem name={el.name} id={el.id} />);

  let messagesElement = messagesData.map( el => <Mesagge name={el.name} id={el.id} />);

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
         {dialogsElement}   
        </div>
        <div className={classes.messages}>
          {messagesElement}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
