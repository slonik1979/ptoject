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
                  state={proprs.appState.dialogsPage}
                  addMessage={proprs.addMessage}
                  updateNewMessageText={proprs.updateNewMessageText}
                  newMessageText={proprs.appState.dialogsPage.newMessageText}
                />
              }
            />
            <Route
              path="/news"
              element={<News state={proprs.appState.newsPage} />}
            />
            <Route
              path="/music"
              element={<Music state={proprs.appState.misicPage} />}
            />
            <Route
              path="/goods"
              element={<Goods state={proprs.appState.goodsPage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
