
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class WhoAmi extends Component {  //Деструктурируем
  constructor(props) {
    super(props);
    this.state = {
      years: 37,
      experience: 10,
      text: '+++++',
      position: ''
    }
 }
    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
          }))
      }

      commitInputChanges = (e) => {
        this.setState({
          position: e.target.value
        })
      }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return (
      <div>
         {/* должны вызвать функцию name() */}
         <button onClick={this.nextYear} >{this.state.text}</button>
        <h1>my names {name}, surname - {surname}, years - {years}, country - {this.state.experience}, 
        position - {position}
         </h1> 
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>

      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
         {/* ПЕРЕДАЕМ ФУНКЦИЮ () => {return 'Ivan'} */}
        <WhoAmi name='Ivan' surname='Petrov' link='facebook.com'/>
        <WhoAmi name='Max' surname='Igolkin' link='vk.com'/>
    </div>
  );
}

export default App;
