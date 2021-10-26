import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store}  />
    </div>);
}

export default Profile;