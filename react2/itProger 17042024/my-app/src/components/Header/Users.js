import React from 'react';

class Users extends React.Component {
  users = [
    { id: 1, name: 'Ivan', age: 25, happy: true },
    { id: 2, name: 'Elena', age: 35, happy: false },
    { id: 3, name: 'Victor', age: 15, happy: true },
  ];
  render() {
    if (this.users.length > 0) {
      return (
        <div>
          {this.users.map((el) => (
            <div className="user" key={el.id}>
              <h3>
                {el.name} {el.age}
              </h3>
              <div>{el.happy ? 'Счастлив' : 'Не счастлив'}</div>
            </div>
          ))}
        </div>
      );
    } else {
      return <div className="user">Пользователей нет</div>;
    }
  }
}

export default Users;
