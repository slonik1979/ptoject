import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
  const dataServer = [
    {name: 'Peter', salary: 500, increase: true, like: false, id: 1},
    {name: 'Mike', salary: 800, increase: false, like: false, id: 2},
    {name: 'Ivan', salary: 5000, increase:false, like: false, id: 3},
    {name: 'Jonh', salary: 1500, increase:false, like: false, id: 4}
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data = {dataServer} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
