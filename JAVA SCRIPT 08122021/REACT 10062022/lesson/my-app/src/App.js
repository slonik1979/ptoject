import { Component } from 'react';
import './App.css';

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
       years: 25,
       position: ''
      }
    }
  
    nextYear = () => {
      this.setState(state => ({
        years: state.years + 1
      }))
    }

    commitInnputChange = (e) => {
      this.setState(state => ({
        position: e.target.value
      }))
    }

  render() {
    const {name, surname, link} = this.props;
    const {years, position} = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>My names is {name}, 
        surname - {surname}, 
        age - {years}, 
        position - {position} </h1>
        <a href ={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInnputChange} />
        </form>
      </div>
    )
  }
  
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
