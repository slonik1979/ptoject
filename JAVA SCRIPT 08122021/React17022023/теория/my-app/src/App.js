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

  nexYears = () => {
    this.setState(state => ({
        years: state.years + 1
     
    }))
  }

  prevYears = () => {
    if (this.state.years > 0) {
      this.setState(state => ({
        years: state.years - 1
     
    }))
    }
   }

   commitInputChanges = (e) => {
    this.setState({
      position: e.target.value

    })
   }

  render() {
    const {name, surname, link} = this.props;
    const {years, position} = this.state;
    return (
      <div>
        <button onClick={this.nexYears}>+++</button>
        <button onClick={this.prevYears}>---</button>
        <h1>My names is {name},
            surname - {surname},
            years: {years},
            position: {position}</h1>
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
      <WhoAmi name='Peter' surname='Smith' link='mail.ru'/>
      <WhoAmi name='Mike' surname='Ivanov' link='yandex.ru'/>
    </div>
  );
}

export default App;
