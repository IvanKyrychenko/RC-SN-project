import './Dialogs.scss';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
            dialogsPage={state} />
    );
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = () => {
    return {
        updateNewMessageBody: () => {
            props.store.dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            props.store.dispatch(sendMessageCreator());
         }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;