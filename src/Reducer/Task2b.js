const initialState = {
    b: 1
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "UPDATE_B") {
      return {
        ...state,
        b: action.payloadD + state.b + 1
      };
    }
  
    return state;
  };
  
  export default reducer;