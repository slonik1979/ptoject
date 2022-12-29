import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({
  data,
  onDelete555,
  onToggleIIncrease,
  onToggleRise,
}) => {
  const elements = data.map((item) => {
    const { id, ...iProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...iProps}
        onDelete={() => onDelete555(id)}
        onToggleIIncrease={() => onToggleIIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
