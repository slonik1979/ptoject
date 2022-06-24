import { Component } from 'react';
import './App.css';

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27
    }
  }

  nextYaer = () => {
    console.log('!!!!!!');
  }


  render() {
    const {name, surname, link} = this.props;
    return (  
      <div>
        <h1> My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
  
    )
  }
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
