import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {
    return (<div>
        <div>My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message="Hi! How are u?" likesCount='20'/>
            <Post message="It's my first post" likesCount='30' />
        </div>
    </div>)
}

export default MyPosts; 