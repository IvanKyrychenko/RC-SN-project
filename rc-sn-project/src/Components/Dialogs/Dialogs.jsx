import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import './Dialogs.scss';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../Redux/DialogsReducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
    );
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />
    );
    let newMessageBody = state.newMessageBody;

        let onSendMessageClick = () => {
            props.sendMessage();
        }
        
        let onNewMessageChange = (e) => {
          let body = e.target.value;
          props.updateNewMessageBody(body);
        }

    return (
        <div className='dialogs'>
            <div className='dialogsItems'>
                {dialogElements}
            </div>
            <div className='messages'>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea 
                    value={newMessageBody} 
                    placeholder='Enter your message'
                    onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;