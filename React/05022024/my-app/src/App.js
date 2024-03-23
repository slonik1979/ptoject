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

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile/> */}
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setting" element={<Setting />} />
          <Route
            path="/products"
            element={<Products state={props.state.productsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
