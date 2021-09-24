import './App.scss';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
