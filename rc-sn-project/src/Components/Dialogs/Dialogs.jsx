import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import './Dialogs.scss';

const Dialogs = (props) => {



    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
        );

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />
        );

    return (
        <div className='dialogs'>
            <div className='dialogsItems'>
                {dialogElements}
            </div>
            <div className='messages'>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;