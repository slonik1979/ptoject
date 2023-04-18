//
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NxfO2jY2p_wn9uhwd4m2DrGPEIQU9qDzbVpMJSHPFbgJn260WLBMEibDXUpEvassgIY&usqp=CAU" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className="content">
        <div>
          <img src="https://tinypng.com/images/social/website.jpg" />
        </div>
        <div>ava + descr</div>
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
