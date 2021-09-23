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

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ];

    let dialogElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
    ];

    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How r u?' },
        { id: 3, message: 'Sup, dude?' },
        { id: 4, message: 'Wuzzup' },
        { id: 5, message: 'Bonjour' },
        { id: 6, message: 'Ola!' },
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>


                { dialogElements }


            </div>
            <div className={s.messages}>
                <MessageItem message={messagesData[0].message} id={messagesData[0].id} />
                <MessageItem message={messagesData[1].message} id={messagesData[1].id} />
                <MessageItem message={messagesData[2].message} id={messagesData[2].id} />
                <MessageItem message={messagesData[3].message} id={messagesData[3].id} />
                <MessageItem message={messagesData[4].message} id={messagesData[4].id} />
                <MessageItem message={messagesData[5].message} id={messagesData[5].id} />
            </div>
        </div>
    )
}

export default Dialogs;

