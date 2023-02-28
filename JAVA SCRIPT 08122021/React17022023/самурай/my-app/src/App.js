import React from 'react';
import './App.css';
import Dialogs from './components/dialog/dialog';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
//import Profile from './components/profile/profile';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      {/* <Profile /> */}
      <div className='content'>
      <Dialogs/>
      
      </div>
      
    </div>
  );
}

export default App;
