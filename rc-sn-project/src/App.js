import './App.scss';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Dialogs from './Components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      {/* <Profile /> */}
      <Dialogs />
     </div>
  );
}


export default App;
