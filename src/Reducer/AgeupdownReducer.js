import * as ActionTypes from '../Action/Type';
const initialState ={
age:20
};
export default (state = initialState, action)=> {
switch (action.type){
case ActionTypes.AGE_UP1:{
return {...state, age:state.age+action.value}
}
case ActionTypes.AGE_DOWN1:{
return{...state,age:state.age-action.value}
}
default:
return state;
}
}