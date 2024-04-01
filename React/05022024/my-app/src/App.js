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
            <Route path="/profile" element={<Profile 
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            newPostText={props.state.profilePage.newPostText}/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage}
                   updateNewMessageText={props.updateNewMessageText}
                   newMessageText={props.state.dialogsPage.newMessageText}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/products" element={<Products
                                    productsPage={props.state.productsPage}
                                    newProductName={props.state.productsPage.newProductName}
                                    addProduct={props.addProduct}
                                    updateNewProductName={props.updateNewProductName}
                                    />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
