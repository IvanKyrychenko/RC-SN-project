import './App.scss';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Profile />
     </div>
  );
}


export default App;
