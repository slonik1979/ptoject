//import { NavLink } from 'react-router-dom';
import s from './dialog.module.css';
import Message from './message/message';
import DialogItem from './dialog_items/dialog_items';

const Dialogs = ({ dialogData, messegesData, state }) => {
  let dialogElements = state.dialogData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  const messegesElements = state.messegesData.map((el) => (
    <Message messag={el.name} id={el.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogElements}</div>
      <div className={s.messeges}>{messegesElements}</div>
    </div>
  );
};

export default Dialogs;
