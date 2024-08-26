import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile}/>
        
      </div>

      {/* <Profile /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
