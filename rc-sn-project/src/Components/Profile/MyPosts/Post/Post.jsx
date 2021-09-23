import './Post.scss';

const Post = (props) => {
    return (<div>
        <div className='item'>
            <img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' />
            {props.message}</div>
        <div>
            <span>Like </span> {props.likesCount}
        </div>
    </div>);
}

export default Post;