import s from './Dialogs.module.css';
import DialogItem from './DialosItems/DialogItem';
import Messege from './Messege/Messege';

const Dialogs = ({ dialogsData, messegesData }) => {
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
