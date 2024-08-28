import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Дмитрий' },
    { id: 2, name: 'Андрей' },
    { id: 3, name: 'Света' },
    { id: 4, name: 'Саша' },
  ];

  let messagesData = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Пока' },
    { id: 3, message: 'Хай' },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
