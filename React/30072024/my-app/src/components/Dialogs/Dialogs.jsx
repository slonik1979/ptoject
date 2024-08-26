import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1"> Дмитрий </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2"> Андрей </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3"> Света </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4"> Саша </NavLink>
        </div>
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
