import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" />
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
          <img src="https://img.freepik.com/free-photo/a-colorful-hummingbird-with-a-colorful-background_1340-38746.jpg?w=2000" />
        </div>
        <div>ava + desc</div>
        <div>
          My posts
          <div>News posts</div>
          <div>
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
