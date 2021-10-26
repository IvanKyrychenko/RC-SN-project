import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";


let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi! How are u?', likesCount: 5 },
                { id: 2, message: "Wuzzup?", likesCount: 20 },
                { id: 3, message: "It's my first post", likesCount: 15 },
                { id: 4, message: "Hello, World", likesCount: 20 }
            ],
            newPostText: 'samurai'
        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },
            ],

            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How r u?' },
                { id: 3, message: 'Sup, dude?' },
                { id: 4, message: 'Wuzzup' },
                { id: 5, message: 'Bonjour' },
                { id: 6, message: 'Ola!' },
            ],

            newMessageBody: ""
        }
    },

    _callSubscriber() {
        console.log('state has been changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state); 
    }
}

export default store;
window.store = store;