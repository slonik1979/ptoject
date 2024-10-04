import React from 'react';
import s from './Users.module.css';
//import axios from 'axios';

const Users = (props) => {
  //if (props.users.length === 0) {
  //props.setUsers();
  //   debugger
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
  //       props.setUsers(response.data.items);
  //     });
  //}
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
        followed: false,
        fullname: 'Дмитрий',
        status: 'Я босс',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
        followed: true,
        fullname: 'Микола',
        status: 'Я хохол',
        location: { city: 'Kiev', country: 'Ukraine' },
      },
      {
        id: 3,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
        followed: true,
        fullname: 'Петр',
        status: 'Я москаль',
        location: { city: 'Moscow', country: 'Russia' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
