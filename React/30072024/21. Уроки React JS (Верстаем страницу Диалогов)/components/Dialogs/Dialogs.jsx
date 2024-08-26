import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
    <div className={s.dialog}>Дмитрий</div>
    <div className={s.dialog}>Андрей</div>
    <div className={s.dialog}>Света</div>
    <div className={s.dialog}>Саша</div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>Привет</div>
      <div className={s.message}>Пока</div>
      <div className={s.message}>Хай</div>
    </div>
  </div>
  
  )
};

export default Dialogs;
