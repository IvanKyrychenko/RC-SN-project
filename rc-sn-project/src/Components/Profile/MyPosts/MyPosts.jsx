import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {
    return (<div>
        <div>My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message="Hi! How are u?" likeCount='15'/>
            <Post message="It's my first post" likeCount='20' />
        </div>
    </div>)
}

export default MyPosts; 