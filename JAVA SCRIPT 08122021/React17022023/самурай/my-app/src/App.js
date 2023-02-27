import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';  
import Profile from './components/content/profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
  
      
    
    </div>
  );
}

export default App;
