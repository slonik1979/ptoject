import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let aaa = 'dialogs/' + props.id;
  let bbb = props.name;
  return (
    <div className={classes.dialogItem}>
      <NavLink to={aaa}>{bbb}</NavLink>
    </div>
  );
};

const Mesagge = (props) => {
  return <div className={classes.message}>{props.name}</div>;
};

const Dialogs = (props) => {



  let dialogsElement = props.dialogsData.map( el => <DialogItem name={el.name} id={el.id} />);

  let messagesElement = props.messagesData.map( el => <Mesagge name={el.name} id={el.id} />);

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
