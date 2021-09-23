import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi! How are u?', likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 20}
    ];

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    </div>)
}

export default MyPosts;