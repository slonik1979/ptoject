import { NavLink } from 'react-router-dom';
import s from './dialog.module.css';

const DialogItem = ({name, id}) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
                   <NavLink to={"/dialog/" + id}>{name}</NavLink> 
                </div>
    )
}

const Message = ({messag}) => {
    return (
        <div className="message">{messag}</div>
    )
}

const Dialogs = () => {
    return (        
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name="Ivan" id='1'/>
                <DialogItem name="Peter" id='2'/>
                <DialogItem name="Roman" id='3'/>
                            
            </div>
       <div className={s.messeges}>
        <Message messag="Привет"/>
        <Message messag="Пока"/>
        <Message messag="Как дела"/>
        </div>
    </div>
    )
}

export default Dialogs;




