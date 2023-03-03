import { NavLink } from 'react-router-dom';
import s from './dialog.module.css';

const Dialogs = () => {
    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/dialog/1">Ivan</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialog/1">Peter</NavLink> 
               </div>
                <div className={s.dialog}>
                <NavLink to="/dialog/1">Roman</NavLink> 
                </div>
            </div>
        
       <div className={s.messeges}>
            <div className="message">Привет</div>
            <div className="message">Пока</div>
            <div className="message">Как дела</div>
            </div>
    </div>
    )
}

export default Dialogs;




