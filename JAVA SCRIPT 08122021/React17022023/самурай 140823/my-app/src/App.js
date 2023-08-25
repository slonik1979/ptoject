import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  let postsData = [
    { id: 1, message: 'Hi', like: 15 },
    { id: 1, message: 'My names Maxim', like: 10 },
  ];
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile posts={postsData}/>} />  
            <Route path="/dialogs/" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          {/* <Dialogs/>
      <Profile /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
