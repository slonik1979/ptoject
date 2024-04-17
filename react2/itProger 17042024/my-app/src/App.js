import './App.css';
import Header from './components/Header/Header';
import Users from './components/Header/Users';

function App(props) {
  return (
    <div className="App">
      <div className="name">
        <Header title="Список пользователей" />
        <main>
          <Users />
          <aside></aside>
        </main>
      </div>
    </div>
  );
}

export default App;
