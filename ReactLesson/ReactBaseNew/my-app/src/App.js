import logo from './logo.svg';
import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h1>Hello World!</h1>
}

// const Field = () => {
//   const holder = 'Введите';
//   const styleField = {
//     width: "300px"
//   };
//   return <input placeholder = {holder}
//                 type = "text"
//                 style = {styleField}/>
// }

function Btn() {
  // const res = () => {
  //   return "Login in";
  // }
  //const p = <p>Login in</p>
  const logged =true;
  const text = "Login in";
  return <button>{logged ? 'Enter' : text}</button>
}

class Field extends Component {
  render() {
    const holder = 'Введите';
    const styleField = {
    width: "300px"};

    return <input placeholder = {holder}
                  type = "text"
                  style = {styleField}/>
  }
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
        
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
