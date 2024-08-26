import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Goods from './components/Goods/Goods';

function App() {
  return (
    <BrowserRouter>
   
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/goods" component={Goods}/>

        
        
      </div>

      {/* <Profile /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
