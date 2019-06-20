import * as ActionTypes from './Type';
export function updateA(b) {
return function (dispatch){
dispatch({
    type: "UPDATE_A",payloadC:b
});
}
}
export function  updateB(a){
return function (dispatch){
dispatch({ type: "UPDATE_B",payloadD:a});
}
}
export function updateC(d) {
return function (dispatch){
dispatch({
    type: "UPDATE_C",payloadA:d
});
}
}
export function  updateD(c){
return function (dispatch){
dispatch({ type: "UPDATE_D",payloadB:c});
}
}