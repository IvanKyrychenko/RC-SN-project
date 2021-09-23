import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi! How are u?', likesCount: 5 },
        { id: 2, message: "Wuzzup?", likesCount: 20 },
        { id: 3, message: "It's my first post", likesCount: 15 },
        { id: 4, message: "Hello, World", likesCount: 20 }
    ];

    let postsElement = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} />
        );

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
                {postsElement}
            </div>
        </div>
    </div>)
}

export default MyPosts;