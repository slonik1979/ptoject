const FOLLOW = 'FOLLOW';
const ONFOLLOW = 'ONFOLLOW';

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullname: 'Дмитрий',
      status: 'I am a boss',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 1,
      followed: true,
      fullname: 'Андрей',
      status: 'I am a boss',
      location: { city: 'Moscow', country: 'Russia' },
    },
    {
      id: 1,
      followed: false,
      fullname: 'Света',
      status: 'I am a boss',
      location: { city: 'Kiev', country: 'Ukraine' },
    },
  ],
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
        }),
      };

    case ONFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, onfollowed: true };
          }
        }),
      };
    default:
      return state;
  }
};

export const followAc = (userId) => ({ type: FOLLOW, userId });

export const onfollowAc = (userId) => ({ type: ONFOLLOW, userId });

export default usersReducer;
