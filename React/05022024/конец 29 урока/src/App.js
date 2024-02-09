import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Products from './components/Products/Products';

function App(props) {



  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile/> */}
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} messages={props.state.dialogsPage}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/products" element={<Products state={props.state.productsPage}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
