import './App.scss';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'
import { Route } from 'react-router';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        <Route path='/profile' render={() => <Profile store={props.store} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
