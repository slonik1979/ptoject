import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogsItems = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { name: 'Иван', id: 1 },
    { name: 'Николай', id: 2 },
    { name: 'Света', id: 3 },
  ];

  let messages = [
    { message: 'Иван', id: 1 },
    { message: 'Как дела', id: 2 },
    { message: 'Как Вас зовут', id: 3 },
  ];

  const dialogsElements = dialogs.map((dialog) => (
    <DialogsItems name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = messages.map((message) => (
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
