import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {
    return (<div>
        <div className={s.postsBlock}><h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi! How are u?" likesCount='20' />
                <Post message="It's my first post" likesCount='30' />
            </div>
        </div>
    </div>)
}

export default MyPosts;