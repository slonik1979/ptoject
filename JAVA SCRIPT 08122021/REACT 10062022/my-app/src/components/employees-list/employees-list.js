import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name = "Mike R." salary = {1000}/>
            <EmployeesListItem name = "Alex Z." salary = {1200}/>
            <EmployeesListItem name = "Rik F." salary = {3600}/>
        </ul>
    )
}

export default EmployeesList;