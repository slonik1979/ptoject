import React from 'react';
import classes from './Dialogs.module.css';

import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = (props) => {
  let newDialogsData = props.state.dialogsData.map((el) => (
    <DialogsItems id={el.id} name={el.name} />
  ));

  let newMessagesData = props.state.messagesData.map((el) => (
    <Message id={el.id} message={el.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{newDialogsData}</div>

      <div className={classes.messages}>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
        />
        <button onClick={addMessage}>Add message</button>
        <div>{newMessagesData}</div>
      </div>
    </div>
  );
};

export default Dialogs;
