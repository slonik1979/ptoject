import logo from './logo.svg';
import './App.css';

function WhoAmi({name, surname, link}) {  //Деструктурируем
  return (
    <div>
       {/* должны вызвать функцию name() */}
      <h1>my names {name()}, surname - {surname}</h1> 
      <a href={link}>My profile</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
         {/* ПЕРЕДАЕМ ФУНКЦИЮ () => {return 'Ivan'} */}
        <WhoAmi name={() => {return 'Ivan'}} surname='Petrov' link='facebook.com'/>
        <WhoAmi name={() => {return 'Ivan'}} surname='Igolkin' link='vk.com'/>
    </div>
  );
}

export default App;
