
import './App.css';

function WhoAmi ({name, surname, link}) {
  return (  
    <div>
      <h1> My name is {name}, surname {surname} - </h1>
      <a href={link}>My profile</a>
    </div>

  )
}

function App() {
  return (
    <div className="App">
      <WhoAmi name="Petro" surname="Huan" link="vk.ru" />
      <WhoAmi name="Mike" surname="Don" link="mail.ru" />
    </div>
  );
}

export default App;
