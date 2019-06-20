const initialState = {
    c: 1
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "UPDATE_C") {
      return {
        ...state,
        c: state.c + action.payloadA + 1
      };
    }
  
    return state;
  };
  
  export default reducer;
  