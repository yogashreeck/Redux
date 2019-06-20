const initialState = {
    d: 1
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "UPDATE_D") {
      return {
        ...state,
        d: state.d + action.payloadB + 1
      };
    }
  
    return state;
  };
  
  export default reducer;
  