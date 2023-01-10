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
      term: '',
      filter: ''
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

  onToggleProp = (id1, prop) => {
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
        if (item.id === id1) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
  }))
}

  // onToggleRise = (id1) => {
  //   this.setState(({dataServer}) => ({
  //     dataServer: dataServer.map(item => {
  //       if (item.id === id1) {
  //         return {...item, like: !item.like}
  //       }
  //       return item;
  //     })
  // }))
  // };

    searchEmp = (items, term) => {
      if (term.length === 0) {
        return items;
      }
      return items.filter(item => {
        return item.name.indexOf(term) > -1;
      })
    }

    onUpdateSearch = (term) => {
      this.setState({term})
    }

    filterPost = (items, filter) => {
      switch (filter) {
          case 'rise':
              return items.filter(item => item.like);
          case 'moreThen1000':
              return items.filter(item => item.salary > 1000);
          default:
              return items
      }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
}

  render() {
    const {dataServer, term, filter} = this.state;
    const employees = this.state.dataServer.length;
    const increased = this.state.dataServer.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(dataServer, term), filter);
    return (
      <div className="app">
        <AppInfo 
        employees={employees} increased={increased}/>

        <div className="search-panel">
          <SearchPanel 
          onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete555={this.deleteItem}
          onToggleProp={this.onToggleProp}
          />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
