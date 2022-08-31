
import './App.css';

function WhoAmi ({name, surname, link}) {
  return (
    <div>
      <h1>My names is {name}, surname - {surname}</h1>
      <a href ={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmi name ="Alex" surname = "Klinton" link = "ok.ru"/>
      <WhoAmi name ="Mike" surname = "Bush" link = "vk.ru"/>
    </div>
  );
}

export default App;
