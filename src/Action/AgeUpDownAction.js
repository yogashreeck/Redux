import * as ActionTypes from './Type';
export function onAgeUp() {
return function (dispatch){
dispatch({
type:"AGE_UP1",value:1
});
}
}
export function onAgeDown(){
return function (dispatch){
dispatch({type:"AGE_DOWN1",value:1});
}
}