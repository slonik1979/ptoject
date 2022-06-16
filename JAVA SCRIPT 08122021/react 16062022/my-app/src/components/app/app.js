
import AppIhfo from '../app-info/app-info';
import AppFilter from '../app-filters/app-filters';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {
    return(
        <div className="app">
            <AppIhfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>

            <EmployeesAddForm/>
        </div>
    );
}

export default App;