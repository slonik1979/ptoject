import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Дмитрий" id="1" />
        <DialogItem name="Андрей" id="2" />
        <DialogItem name="Света" id="3" />
        <DialogItem name="Саша" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Привет" />
        <Message message="Пока" />
        <Message message="Хай" />
      </div>
    </div>
  );
};

export default Dialogs;
