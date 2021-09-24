import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi! How are u?', likesCount: 5 },
  { id: 2, message: "Wuzzup?", likesCount: 20 },
  { id: 3, message: "It's my first post", likesCount: 15 },
  { id: 4, message: "Hello, World", likesCount: 20 }
];

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


