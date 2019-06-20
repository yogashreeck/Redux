import React, { Component } from 'react';
import {connect} from "react-redux";



class Todo extends Component {
    render() {
        
        return (
            <div>
                <div className = "App">
                your age : <span>{this.props.counter}</span>
            <div>
               <button onClick = {this.props.increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {this.props.decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {this.props.reset}>RESET</button>
         </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       counter: state.counter
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {
       increment: () => dispatch({  type: 'INCREMENT', value : 1}),
       decrement: () => dispatch({type: 'DECREMENT',value : 1}),
       reset: () => dispatch({type: 'RESET',value : 1})
    };
 };


export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Todo);