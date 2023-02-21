import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'


const EmployeesList = ({data, onElement, onAdd}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete = {() => onElement(id)}
            onAdd = {() => onAdd(id)}
            />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmployeesList;