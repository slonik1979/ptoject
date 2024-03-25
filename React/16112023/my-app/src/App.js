import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Goods from './components/Goods/Goods';

function App(props) {
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
                  profilePage={props.appState.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogsPage={props.appState.dialogsPage}
                  dispatch={props.dispatch}
                  state={props.appState.dialogsPage}
                  addMessage={props.addMessage}
                  updateNewMessageText={props.updateNewMessageText}
                  newMessageText={props.appState.dialogsPage.newMessageText}
                />
              }
            />
            <Route
              path="/news"
              element={<News state={props.appState.newsPage} />}
            />
            <Route
              path="/music"
              element={<Music state={props.appState.misicPage} />}
            />
            <Route
              path="/goods"
              element={<Goods state={props.appState.goodsPage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
