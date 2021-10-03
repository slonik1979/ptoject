
import './App.css';


function WhoAmI({name, surname, link}) {
  return (
    <div>
    <h1>My names is {name}, surname - .surname}</h1>
    <a href={link}>My profile</a></div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebokk.com" />
      <WhoAmI name="Mike" surname="Leone" link="vk.com" />
    </div>
  );
}

export default App;
