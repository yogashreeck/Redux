import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../Action/Task3';
import './task3.css';

class Task3 extends Component{
    render(){
        return(
            <div className='Form'> 
            <form>
                <div className="sub">
            <label>Username</label>
            <input type='text' placeholder="User Name" /><br/>
            </div>
            <div className="sub">
            <label>Password</label>
            <input type='text' placeholder="Password" />
            </div>
            </form><br/>
            <button onClick={this.props.login}>submit</button>
            <p>{this.props.message}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      message : state.Task3.message
    };
  };
export default connect(mapStateToProps,{login})(Task3);