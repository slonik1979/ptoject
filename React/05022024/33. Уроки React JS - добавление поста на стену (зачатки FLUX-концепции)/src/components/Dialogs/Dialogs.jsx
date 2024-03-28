import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogsItems name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newPostElement = React.createRef();

  let addMessage = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
