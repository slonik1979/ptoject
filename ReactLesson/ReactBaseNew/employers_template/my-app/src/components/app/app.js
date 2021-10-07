import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmploersList from '../emploers-list/emploers-list';
import EmployeesAddForm from '../emploers-add-form/emploers-add-form';

import './app.css';

function App() {

    const dat = [
        {name:"John C.", salary: 800, increase: false},
        {name:"Alex D.", salary: 3000, increase: true},
        {name:"Mike F.", salary: 5000, increase: false},
        {name:"Donald T.", salary: 8000, increase: false}
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