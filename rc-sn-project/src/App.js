import './App.scss';
import Profile from './Components/Profile';
import Header from './Components/Header';
import Navigation from './Components/Navigation';


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
