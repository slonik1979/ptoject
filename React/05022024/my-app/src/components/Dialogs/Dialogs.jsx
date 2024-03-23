import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/state';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogsItems name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMssageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMssageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
