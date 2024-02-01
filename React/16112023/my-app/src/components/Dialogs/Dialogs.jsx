import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import {
  addMessagestActionCreator,
  updateNewMessageTextActionCreator,
 
} from '../../redux/state';


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
  let dialogsElement = props.state.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));


  let messagesElement = props.state.messages.map((el) => (
    <Mesagge name={el.name} id={el.id} />
  ));

  let newPostElement = React.createRef();



  let addMessage = () => {
    props.dispatch(addMessagestActionCreator());
  };

  let newMessagesText = props.state.newMessagesText;



  let onMessageChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElement}</div>
        <div className={classes.messages}>
          <div>{messagesElement}</div>
          <div>

            <div><textarea 
            placeholder='Введите'
            onChange={onMessageChange}
          ref={newPostElement}
          value={newMessagesText}
        /></div>
            <div><button onClick={addMessage}>add message</button></div>
          </div>

  

      
      </div>
    </div>
    </div>
  );
};

export default Dialogs;
