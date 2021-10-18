import { Component } from 'react';
import './App.css';


class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++"

    }
  }


  nextYears = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
         <button onClick={this.nextYears} >{this.state.text}</button>
         <h1>My names is {name}, surname - {surname}, age - {this.state.years}</h1>
         <a href={link}>My profile</a>
      </div>
    )
  }
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
