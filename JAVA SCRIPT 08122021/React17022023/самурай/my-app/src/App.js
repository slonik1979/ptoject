import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialog/dialog';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Profile from './components/profile/profile';


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-content">
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/message' element={<Dialogs />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
