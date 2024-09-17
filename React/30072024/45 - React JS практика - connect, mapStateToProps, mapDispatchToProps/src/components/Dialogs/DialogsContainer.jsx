import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../Redux/dialogs-reducer ';
import Dialogs from './Dialogs';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageBody: state.dialogsPage.newMessageBody
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
      addMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
