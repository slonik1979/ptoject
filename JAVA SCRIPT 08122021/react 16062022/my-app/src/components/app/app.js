
import AppIhfo from '../app-info/app-info';
import AppFilter from '../app-filters/app-filters';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {
    const server = [
        {name: "Carl K.", salary: "500"},
        {name: "Petro O.", salary: "1000"},
        {name: "Alex D.", salary: "1500"}
    ];

    return(
        <div className="app">
            <AppIhfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={server} />

            <EmployeesAddForm/>
        </div>
    );
}

export default App;