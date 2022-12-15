
import EmployeesListItem from "../employees-list-item/employees-list-item";


import './employees-list.css';


const EmployeesList = ({bases, onDelete, onToggleProp}) => {

    const elements = bases.map(item => {
        const {id, ...itemP} = item; 
        return (
            <EmployeesListItem  key = {id} {...itemP}
            // спред оператор разворачивает item {item.name} salary = {item.salary} 
            // key = для праильного работы алгоритма согласования = для оптимизации скорости приложения
            onDelete = {() => onDelete(id)}
            onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;