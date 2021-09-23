import MyPosts from './MyPosts/MyPosts';
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>);
}

export default Profile;