import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmploersList from '../emploers-list/emploers-list';
import EmployeesAddForm from '../emploers-add-form/emploers-add-form';

import './app.css';

function App() {

    const dat = [
        {name:"John C.", salary: 800},
        {name:"Alex D.", salary: 3000},
        {name:"Mike F.", salary: 5000},
        {name:"Donald T.", salary: 8000}
    ];


    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <EmploersList data={dat}/>
                <EmployeesAddForm/>
            </div>
        </div>
    );
}

export default App;