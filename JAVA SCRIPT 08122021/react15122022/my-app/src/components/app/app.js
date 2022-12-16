import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const dataServer = [
    {name:'Ivan', salary:500, increase:false, id:1},
    {name:'Petr', salary:800, increase:true, id:2},
    {name:'Karl', salary:1000, increase:false, id:3}, 
    {name:'Mike', salary:1100, increase:false, id:4}
  ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={dataServer}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
