const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
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
      id: 1,
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
      followed: true,
      fullname: 'Микола',
      status: 'Я хохол',
      location: { city: 'Kiev', country: 'Ukraine' },
    },
    {
      id: 1,
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
      followed: true,
      fullname: 'Петр',
      status: 'Я москаль',
      location: { city: 'Moscow', country: 'Russia' },
    },
  ],
  //   newPostText: '88888888',
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
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const serUsersAC = (users) => ({ type: SET_USERS, users });
