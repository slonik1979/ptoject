import { Component } from 'react';
import './App.css';

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
       years: 25
      }
    }
  
    nextYear = () => {
      this.setState(state => ({
        years: state.years + 1
      }))
    }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>My names is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href ={link}>My profile</a>
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
