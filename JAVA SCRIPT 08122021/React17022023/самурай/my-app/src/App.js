import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialog/dialog';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import News from './components/news/news';
import Music from './components/music/music';
import Setting from './components/setting/setting';

function App({ postData, messegesData, dialogData, state }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile state={state.profilePage} />}
            />
            <Route
              path="/message"
              element={<Dialogs state={state.dialogsPage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
