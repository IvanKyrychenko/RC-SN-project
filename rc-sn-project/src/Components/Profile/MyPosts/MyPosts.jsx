import './MyPosts.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />
        );

    return (
        <div>
            <div className='postsBlock'><h3>My Posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
                <div className='posts'>
                    {postsElement}
                </div>
            </div>
        </div>)
}

export default MyPosts;