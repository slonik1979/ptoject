import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
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
        <div className={s.message}>Привет</div>
        <div className={s.message}>Пока</div>
        <div className={s.message}>Хай</div>
      </div>
    </div>
  );
};

export default Dialogs;
