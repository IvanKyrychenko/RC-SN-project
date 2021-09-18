import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {
    return (<div>
        <div>My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>)
}

export default MyPosts;