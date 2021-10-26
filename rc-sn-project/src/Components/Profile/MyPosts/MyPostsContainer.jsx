import './MyPosts.scss';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer'; 
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let text = newPostElement.current.value
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts updateNewPostText={ onPostChange } addPost = {addPost} post={state.profilePage.posts} newPostText={state.profilePage.updateNewPostText}/>
    )};
export default MyPostsContainer;