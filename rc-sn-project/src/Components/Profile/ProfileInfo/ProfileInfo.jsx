import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
                <div className={s.descriptionBlock}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU' />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;