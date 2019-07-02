const initialState = {
    message: ""
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
      return {
        ...state,
        message:'LOGIN SUCESSFULLY'
      };
    }
  
    return state;
  };
  
  export default reducer;
  