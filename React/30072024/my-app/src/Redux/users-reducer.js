const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [
    //   {
    //     id: 1,
    //     photoUrl:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
    //     followed: false,
    //     fullname: 'Дмитрий',
    //     status: 'Я босс',
    //     location: { city: 'Minsk', country: 'Belarus' },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
    //     followed: true,
    //     fullname: 'Микола',
    //     status: 'Я хохол',
    //     location: { city: 'Kiev', country: 'Ukraine' },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TVUWnDnFrpXpLaFsMPnjYNT_99YHKu4kud5AkAS7xeiykJz_6iXYPUIBHXWlM3DLhrY&usqp=CAU',
    //     followed: true,
    //     fullname: 'Петр',
    //     status: 'Я москаль',
    //     location: { city: 'Moscow', country: 'Russia' },
    //   },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };

    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
