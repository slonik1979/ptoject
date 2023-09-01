
import React from 'react';
import s from './SiderbarItem.module.css';


const SidebarItem = ({ message, like }) => {
  return ( <div className={s.sider}>
        <div className={s.circle}></div>
        <div className={s.name}>Ivan</div>
        
  </div>
  
 
   
  );
};

export default SidebarItem;