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
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProductsContainer from './components/Products/ProductsContainer';

function App(props) {
  return (
    <BrowserRouter>
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
                  store={props.store}
                  newPostText={props.state.profilePage.newPostText}
                  dialogs={props.dialogs}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer
                  store={props.store}
                  dialogsPage={props.state.dialogsPage}
                  newMessageText={props.state.dialogsPage.newMessageText}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
            <Route
              path="/products"
              element={
                <ProductsContainer
                  store={props.store}
                  productsPage={props.state.productsPage}
                  newProductName={props.state.productsPage.newProductName}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;