import { NavLink } from 'react-router-dom';
import s from './../dialog.module.css';

const DialogItem = ({name, id}) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
                   <NavLink to={"/dialog/" + id}>{name}</NavLink> 
                </div>
    )
}



export default DialogItem;




