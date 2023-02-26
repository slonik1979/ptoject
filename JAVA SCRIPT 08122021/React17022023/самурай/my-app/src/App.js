import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5lt9d4MIc952-2gMRFDFX7eq4H6JkE_DUA&usqp=CAU" />
      </header>
      <nav className="nav">
        <div>Profile</div>
        <div>Message</div>
        <div>News</div>
        <div>Music</div>

        <div>Setting</div>
      </nav>
      <div className="content">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWv-TxW1o4uq321qA2W4ISMiHZklZURmCJQ&usqp=CAU" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2U111p3Zn5l3ZurcpiOzfZOOhBrmqc7zinA&usqp=CAU" />
          avatar + descr
        </div>
        <div>
          My post
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
