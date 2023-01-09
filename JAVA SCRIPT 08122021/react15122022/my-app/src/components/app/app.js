import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: '',
      dataServer: [
        { name: 'Ivan', salary: 500, increase: true, like: true, id: 1 },
        { name: 'Petr', salary: 800, increase: false, like: false, id: 2 },
        { name: 'Karl', salary: 1000, increase: false, like: false, id: 3 },
        { name: 'Mike', salary: 1100, increase: false, like: false, id: 4 },
      ],
    };
    this.maxId = 5;
  }

  deleteItem = (i) => {
    this.setState(({ dataServer }) => {
      return {
        dataServer: dataServer.filter((item) => item.id !== i),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: '',
      like: false,
      id: this.maxId++
    };
    this.setState(({ dataServer }) => {
      const newArr = [...dataServer, newItem];
      return {
        dataServer: newArr,
      };
    });
  };

  onToggleIIncrease = (id1) => {
    // this.setState(({dataServer}) => {
    //   const index = dataServer.findIndex(elem => elem.id === id1);
    
    //   const old = dataServer[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...dataServer.slice(0, index), newItem, ...dataServer.slice(index + 1)]

    //   return {
    //     dataServer: newArr
    //   }
    
    // })

    this.setState(({dataServer}) => ({
      dataServer: dataServer.map(item => {
        if (item.id1 === id1) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
  }))
}

  onToggleRise = (id1) => {
    console.log(`${id1}`);
    // this.setState(({like}) => ({
    //   like: !like
    // }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.dataServer}
          onDelete555={this.deleteItem}
          onToggleIIncrease={this.onToggleIIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
