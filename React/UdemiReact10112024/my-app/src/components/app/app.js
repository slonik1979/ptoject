import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

const App = () => {
  const data = [
    { name: 'John C.', salary: 800, increase: false },
    { name: 'Alex M.', salary: 3000, increase: true },
    { name: 'Carl W.', salary: 5000, increase: false },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
};

export default App;
