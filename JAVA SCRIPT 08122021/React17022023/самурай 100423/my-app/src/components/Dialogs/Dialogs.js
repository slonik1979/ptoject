import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = ({ name, id }) => {
  let patch = '/dialogs/' + id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={patch}>{name}</NavLink>
    </div>
  );
};

const Messege = ({ messege }) => {
  return <div className={s.messege}>{messege}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Ivan" id="1" />
        <DialogItem name="Peter" id="2" />
        <DialogItem name="Mike" id="3" />
        <DialogItem name="Victor" id="4" />
      </div>
      <div iv className={s.messeges}>
        <Messege messege="Hi" />
        <Messege messege="Hi2" />
        <Messege messege="Hi3" />
        <Messege messege="Hi4" />
        <Messege messege="Hi5" />
      </div>
    </div>
  );
};

export default Dialogs;
