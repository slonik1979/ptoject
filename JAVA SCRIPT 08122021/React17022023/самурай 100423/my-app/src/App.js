import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NxfO2jY2p_wn9uhwd4m2DrGPEIQU9qDzbVpMJSHPFbgJn260WLBMEibDXUpEvassgIY&usqp=CAU" />
      </header>
      <nav className='nav'>
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
      <div className='content'>My content</div>
    </div>
  );
}

export default App;
