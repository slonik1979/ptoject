import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/state';

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogsItems name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let NewMessageText = props.state.NewMessageText;

  let newPostElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
    // props.updateNewPostText('');
  };

  let onMessageChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newPostElement}
            value={props.NewMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>addMessage</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
