import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList = ({bases, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = bases.map(item => {
        const {id, ...itemP} = item; 
        return (
            <EmployeesListItem  key = {id} {...itemP}
            // спред оператор разворачивает item {item.name} salary = {item.salary} 
            // key = для праильного работы алгоритма согласования = для оптимизации скорости приложения
            onDelete = {() => onDelete(id)}
            onToggleIncrease = {() => onToggleIncrease(id)}
            onToggleRise = {() => onToggleRise(id)}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;