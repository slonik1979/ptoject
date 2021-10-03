import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmploersList from '../emploers-list/emploers-list';
import EmployeesAddForm from '../emploers-add-form/emploers-add-form';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <EmploersList/>
                <EmployeesAddForm/>
            </div>
        </div>
    );
}

export default App;