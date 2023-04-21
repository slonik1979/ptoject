import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs}>
                <div className={s.dialog + ' ' + s.active}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Peter
                </div>
                <div className={s.dialog}>
                    Mike
                </div>
                <div className={s.dialog}>
                    Mike
                </div>
                <div className={s.dialog}>
                    Mike
                </div>
            </div>
            <div className={s.messeges}>
                <div className={s.messege}>Hi</div>
                <div className={s.messege}>Hi2</div>
                <div className={s.messege}>Hi3</div>
            </div>
        </div>
        
       
    )
}

export default Dialogs;