const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    //   {
    //     id: 1,
    //     photoUrl:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGNXuN8Ue3J1hG9YGCa8QkYro8Q8PcZcOPg&s',
    //     followed: false,
    //     fullname: 'Ivan',
    //     status: 'I am a boss',
    //     location: { city: 'Minsk', country: 'Belarus' },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGNXuN8Ue3J1hG9YGCa8QkYro8Q8PcZcOPg&s',
    //     followed: true,
    //     fullname: 'Sveta',
    //     status: 'I am a girl',
    //     location: { city: 'Moscow', country: 'Russia' },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGNXuN8Ue3J1hG9YGCa8QkYro8Q8PcZcOPg&s',
    //     followed: false,
    //     fullname: 'Petr',
    //     status: 'I am a boy',
    //     location: { city: 'Kiev', country: 'Ukraine' },
    //   },
  ],
  newPostText: '8888',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
