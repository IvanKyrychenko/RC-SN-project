import s from './Navigation.module.scss'

const Navigation = () => {
    return (<nav className={s.nav}>
        <div>
            <a className={s.item}>Profile</a>
        </div>
        <div>
            <a className={s.item}>Messages</a>
        </div>
        <div>
            <a className={s.item}>News</a>
        </div>
        <div>
            <a className={s.item}>Music</a>
        </div>
        <div>
            <a className={s.item}>Settings</a>
        </div>
    </nav>);
}

export default Navigation;