import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">Ivan</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Peter</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Mike</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Victor</NavLink>
        </div>
      </div>
      <div iv className={s.messeges}>
        <div className={s.messege}>Hi</div>
        <div className={s.messege}>Hi2</div>
        <div className={s.messege}>Hi3</div>
      </div>
    </div>
  );
};

export default Dialogs;
