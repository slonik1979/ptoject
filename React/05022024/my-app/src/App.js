import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Products from './components/Products/Products';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProductsConteiner from './components/Products/ProductsConteiner';
import Users from './components/Users/Users';
import UsersConteiner from './components/Users/UsersConteiner';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      {/* <Profile/> */}
      <div className="app-wrapper-content">
        <Route path="/profile/:userId" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
      
        <Route path="/news" render={() => <News />} />
      
        <Route path="/music" render={() => <Music />} />
        <Route path="/setting" render={() => <Setting />} />
        <Route path="/products" render={() => <ProductsConteiner />} />
        <Route path="/users" render={() => <UsersConteiner />} />
      </div>
    </div>
  );
}

export default App;
