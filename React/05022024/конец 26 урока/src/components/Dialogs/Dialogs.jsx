import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogsItems = (props) => {
  return (
    <div className={classes.dialog}>
              <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> 
              </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}


const Dialogs = () => {
  return ( <div className={classes.dialogs}>
          <div className={classes.dialogsItems}>
            <DialogsItems name="Иван" id='1'/>
            <DialogsItems name="Николай" id='2'/>
            <DialogsItems name="Света" id='3'/>
            
          </div>
          <div className={classes.messages}>
            <Message message='Привет'/>
            <Message message='Как дела'/>
            <Message message='Как Вас зовут'/>
        
      </div>

      </div>
      
   
      
   
  )
}

  export default Dialogs;
