import React from 'react';
import s from './Sidebar.module.css';
import SidebarItem from './SiderbarItem/SiderbarItem';

const Sidebar = () => {
    
    return <div>
        <div className={s.item}>
            Friends
        </div>
        <div >
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        </div>
        
    </div>
    
}

export default Sidebar;