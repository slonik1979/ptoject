import { NavLink } from 'react-router-dom';
import s from './dialog.module.css';
import Message from './message/message';
import DialogItem from './dialog_items/dialog_items';

const Dialogs = () => {
 
    const dialogData = [
        {id: '1', name: "Ivan"},
        {id: '2', name: "Peter"},
        {id: '3', name: "Roman"},
        {id: '3', name: "Mike"}
    ]

    const messegesData = [
        {id: '1', name: "Привет"},
        {id: '2', name: "Пока"},
        {id: '3', name: "Как дела"},
        {id: '4', name: "Меня зовут"}
    ]

    let dialogElements = dialogData.map((el) => (
        <DialogItem name={el.name} id={el.id}/>
    ))

    const messegesElements = messegesData.map((el) => (
        <Message messag={el.name} id={el.id}/>
    )
    )

    return (        
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
                         
            </div>
       <div className={s.messeges}>
        {messegesElements}
        </div>
    </div>
    )
}

export default Dialogs;




