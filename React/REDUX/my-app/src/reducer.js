const intialState = { value: 5 };

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      };

    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'RND':
      return {
        ...state,
        value: state.value * action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
