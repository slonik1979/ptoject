import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Goods from './components/Goods/Goods';



function App({ myPostsData, dialogsData, messagesData, newsData, misicData, goodsData }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Content myPostsData={myPostsData} />}
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogsData={dialogsData}
                  messagesData={messagesData}
                />
              }
            />
            <Route path="/news" element={<News  newsData={newsData}/>} />
            <Route path="/music" element={<Music misicData={misicData}/>} />
            <Route path="/goods" element={<Goods goodsData={goodsData}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
