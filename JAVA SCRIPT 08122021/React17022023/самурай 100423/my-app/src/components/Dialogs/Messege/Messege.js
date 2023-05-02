import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';



const Messege = ({ messege }) => {
  return <div className={s.messege}>{messege}</div>;
};



export default Messege;