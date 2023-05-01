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
  let dialogsData = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Mike' },
    { id: 4, name: 'Victor' },
  ];

  let messegesData = [
    { id: 1, messege: 'Hi' },
    { id: 2, messege: 'Hi2' },
    { id: 3, messege: 'Hi3' },
    { id: 4, messege: 'Hi4' },
  ];

  let dialogsElement = dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messegesElement = messegesData.map((el) => {
    return <Messege messege={el.messege} id={el.id} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>

      <div className={s.messeges}>{messegesElement}</div>
    </div>
  );
};

export default Dialogs;
