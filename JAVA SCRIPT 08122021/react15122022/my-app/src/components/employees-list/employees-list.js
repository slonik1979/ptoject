import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete555 }) => {
  const elements = data.map((item) => {
    const { id, ...iProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...iProps}
        onDelete={() => onDelete555(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
