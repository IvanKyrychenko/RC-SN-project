import s from './Post.module.scss'

const Post = () => {
    return (<div>
        <div className={s.item}>
            <img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' />
            Post</div>
    </div>);
}

export default Post;