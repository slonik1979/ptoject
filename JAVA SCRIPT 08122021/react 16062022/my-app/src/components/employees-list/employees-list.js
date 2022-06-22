import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Carl K." salary="500"/>
            <EmployeesListItem name="Petro O." salary="1000"/>
            <EmployeesListItem name="Alex D." salary="1500"/>
        </ul>
    )
}

export default EmployeesList;