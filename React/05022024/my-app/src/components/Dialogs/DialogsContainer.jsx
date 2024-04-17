import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';
//import { connect } from 'react-redux';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      dialogs={props.dialogsPage.dialogs}
      messages={props.dialogsPage.messages}
      newMessageText={props.newMessageText}
    />
  );
};

let f1 = (state) => {
  return {
    
  }
}

let f2 = () => {
    return {
    
  }
}

 //const SuperdialogsContainer = connect (f1, f2) (Dialogs);

export default DialogsContainer;
