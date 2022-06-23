
import AppIhfo from '../app-info/app-info';
import AppFilter from '../app-filters/app-filters';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {
    const server = [
        {name: "Carl K.", salary: "500", increase: true},
        {name: "Petro O.", salary: "1000", increase: false},
        {name: "Alex D.", salary: "1500", increase: false}
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