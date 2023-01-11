import { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  
`;

const Header = styled.h2`
  font-size: 20px;
`;

const Button = styled.button`
  background-color: gold;
`;

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
      <EmpItem>
        <Button onClick={this.nextYear}>+++</Button>
        <Header>My names is {name}, 
        surname - {surname}, 
        age - {years}, 
        position - {position} </Header>
        <a href ={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInnputChange} />
        </form>
      </EmpItem>
    )
  }
  
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmi name ="Alex" surname = "Klinton" link = "ok.ru"/>
      <WhoAmi name ="Mike" surname = "Bush" link = "vk.ru"/>
    </Wrapper>
  );
}

export default App;
