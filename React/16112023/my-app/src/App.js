import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Goods from './components/Goods/Goods';

function App(proprs) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Content
                  profilePage={proprs.appState.profilePage}
                  dispatch={proprs.dispatch}
                  
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  state={appState.dialogsPage}
                  addMessage={addMessage}
                  updateNewMessageText={updateNewMessageText}
                  newMessageText={appState.dialogsPage.newMessageText}
                />
              }
            />
            <Route path="/news" element={<News state={appState.newsPage} />} />
            <Route
              path="/music"
              element={<Music state={appState.misicPage} />}
            />
            <Route
              path="/goods"
              element={<Goods state={appState.goodsPage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
