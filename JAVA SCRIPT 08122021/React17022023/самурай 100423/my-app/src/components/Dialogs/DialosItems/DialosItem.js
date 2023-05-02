import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = ({ name, id }) => {
  let patch = '/dialogs/' + id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={patch}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;