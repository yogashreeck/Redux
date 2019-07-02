
import React from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Age from './practice/Age'
import Trying from './practice/Trying'
import Task1 from './Task/Task1'
import Todo from './practice/Todo';
import Tododo from './practice/Tododo'
// import  Ageupdown from './Component/Ageupdown';
// import Task2 from './Component/Task2';
import FormObject from './practice/FormObject';
import Task3 from './Component/Task3';
import Task4 from './Component/Task4';

function App() {
return (
<div className='App'>
<Router>
<Switch>
<Route exact path='/age' component={Age}></Route>
<Route exact path='/Trying' component={Trying}></Route>
<Route exact path='/Todo' component={Todo}></Route>
<Route exact path='/Tododo' component={Tododo}></Route>
<Route exact path='/task' component={Task1}></Route>
{/* <Route exact path='/task1' component={Ageupdown}></Route> */}
{/* <Route exact path='/task2' component={Task2}></Route> */}
<Route exact path='/form' component={FormObject}></Route>
<Route exact path='/task3' component={Task3}></Route>
<Route exact path='/task4' component={Task4}></Route>
</Switch>
</Router> 

</div>
);   
}
export default App;