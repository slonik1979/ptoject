import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Goods from './components/Goods/Goods';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UserContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/settings" render={Settings} />
        <Route path="/goods" render={Goods} />

        <Route path="/users" render={() => <UserContainer />} />
      </div>
    </div>
  );
}

export default App;
