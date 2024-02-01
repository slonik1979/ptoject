import { Routes, Route } from 'react-router-dom';
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
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Content
                contentPage={props.state.contentPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={<Dialogs state={props.state.messagePage}
            dispatch={props.dispatch}
             />}
   
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route
            path="/goods"
            element={<Goods goods={props.state.goodsPage.goods} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
