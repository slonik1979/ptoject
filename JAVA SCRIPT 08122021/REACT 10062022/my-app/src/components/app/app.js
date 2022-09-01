import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';



import './app.css';



function App() {

    const data = [
        {name: "Mike R.", salary: 1000, increase: false, id: 1},
        {name: "Alex Z.", salary: 1200, increase: true, id: 2},
        {name: "Rik F.", salary: 15000, increase: false, id: 3}
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            
            <EmployeesList bases = {data}/>

            <EmployeesAddForm/>

        </div>

    );
}

export default App;