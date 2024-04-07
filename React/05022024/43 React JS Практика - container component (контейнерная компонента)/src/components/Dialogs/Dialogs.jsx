import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogsItems name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
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
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
            ref={newMessageElement}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
