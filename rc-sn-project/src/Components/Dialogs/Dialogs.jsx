import s from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1' />
                <DialogItem name='Andrey' id='2' />
                <DialogItem name='Sveta' id='3' />
                <DialogItem name='Sasha' id='4' />
                <DialogItem name='Viktor' id='5' />
                <DialogItem name='Valera' id='6' />
            </div>
            <div className={s.messages}>
                <MessageItem message='Hi!' />
                <MessageItem message='How r u?' />
                <MessageItem message='Sup, dude?' />
            </div>
        </div>
    )
}

export default Dialogs;