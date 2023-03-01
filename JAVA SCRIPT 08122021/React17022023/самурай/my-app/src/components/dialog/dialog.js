import s from './dialog.module.css';

const Dialogs = () => {
    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                    Ivan
                </div>
                <div className='dialog'>
                    Peter
                </div>
                <div className='dialog'>
                    Roman
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




