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

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ];

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How r u?' },
        { id: 3, message: 'Sup, dude?' },
        { id: 4, message: 'Wuzzup' },
        { id: 5, message: 'Bonjour' },
        { id: 6, message: 'Ola!' },
    ];

    let dialogElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />
        );

    let messagesElements = messages
        .map(m => <MessageItem message={m.message} id={m.id} />
        );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;