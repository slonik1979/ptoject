import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({
  data,
  onDelete555,
  onToggleProp
}) => {
  const elements = data.map((item) => {
    const { id, ...iProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...iProps}
        onDelete={() => onDelete555(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
