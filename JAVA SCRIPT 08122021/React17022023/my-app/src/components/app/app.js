import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       dataServer: [
        {name: 'Peter', salary: 500, increase: true, like: false, id: 1},
        {name: 'Mike', salary: 800, increase: false, like: false, id: 2},
        {name: 'Ivan', salary: 5000, increase:false, like: false, id: 3},
        {name: 'Jonh', salary: 1500, increase:false, like: false, id: 4}
      ]
    } 

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({dataServer}) => {
      // const index = dataServer.findIndex(elem => elem.id === id)
      // const before = dataServer.slice(0, index);
      // const after = dataServer.slice( index + 1);
      // const newArr = [...before, ...after];
      return {
        dataServer: dataServer.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        id: this.maxId++
    }
    this.setState(({dataServer}) => {
        const newArr = [...dataServer, newItem];
        return {
          dataServer: newArr
        }
    });
}

  render() {
     return (
      <div className="app">
        <AppInfo />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList 
        data = {this.state.dataServer}
        onElement = {this.deleteItem}
        onAdd = {this.onAdd}/>
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
