import { combineReducers} from 'redux';
import AgeupdownReducer from './AgeupdownReducer';
import Task2a from "./Task2a";
import Task2b from "./Task2b";
import Task2c from "./Task2c";
import Task2d from "./Task2d";
import Task3 from "./Task3";
import Task4 from "./Task4";


export default combineReducers ({
   Task2a,
   Task2b,
   Task2c,
   Task2d,
   AgeupdownReducer,
   Task3,
   Task4
});

