import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Mesagge from './Mesagge/Mesagge';

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 'Inna' },
    { id: 2, name: 'Eleha' },
    { id: 3, name: 'Olga' },
  ];

  let messagesData = [
    { id: 1, name: 'Привет' },
    { id: 2, name: 'Как дела' },
    { id: 3, name: 'Здорово' },
  ];

  let dialogsElement = dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElement = messagesData.map((el) => (
    <Mesagge name={el.name} id={el.id} />
  ));

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>{dialogsElement}</div>
        <div className={classes.messages}>{messagesElement}</div>
      </div>
    </div>
  );
};

export default Dialogs;
