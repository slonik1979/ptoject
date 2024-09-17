import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../Redux/dialogs-reducer ';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewPostText(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              value={props.newMessageBody}
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
