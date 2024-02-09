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

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
