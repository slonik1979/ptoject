
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


function App() {

    const data = [
        {name: "Ivan J.", salary: 800, increase: false, id:1},
        {name: "Petr B.", salary: 1500, increase: true, id:2},
        {name: "Karl H.", salary: 500, increase : false, id:3},
    ];

    return (
       <div className = "app" >
           <AppInfo/>
           <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList list={data}/>
            <EmployersAddForm/>
       </div>
    );
}

export default App;