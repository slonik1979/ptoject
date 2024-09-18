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
  newPostText: '88888888',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    //   let text = state.newPostText
    //   return {
    //     ...state,
    //     newPostText: '',
    //     postsData: [...state.postsData, {id: 3, message: state.newPostText, likesCount: 121,}]

    case ONFOLLOW:
    //   return {
    //     ...state,
    //     newPostText: action.newText
    //   }
    // }
    default:
      return state;
  }
};

export const followAc = (userId) => ({ type: FOLLOW, userId });

export const onfollowAc = (userId) => ({ type: ONFOLLOW, userId });

export default usersReducer;
