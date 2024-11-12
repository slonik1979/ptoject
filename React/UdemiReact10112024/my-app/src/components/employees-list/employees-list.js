import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = (props) => {
  const elements = props.data.map((item) => {
    return <EmployeesListItem {...item} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
