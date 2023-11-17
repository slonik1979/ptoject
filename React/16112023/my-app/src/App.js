import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
      <BrowserRouter>
      <Routes>
				<Route path="/profile" element = {<Content />}/>
				<Route path="/dialogs" element = {<Dialogs />}/>
        <Route path="/news" element = {<News />}/>
        <Route path="/music" element = {<Music />}/>
			</Routes>
      </BrowserRouter>
      
      </div>
   
      
    </div>
  );
}

export default App;
