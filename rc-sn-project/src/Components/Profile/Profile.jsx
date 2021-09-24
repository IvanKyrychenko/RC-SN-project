import MyPosts from './MyPosts/MyPosts';
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>);
}

export default Profile;