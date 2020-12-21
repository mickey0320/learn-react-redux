const defaultState = {
  count: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default reducer;
