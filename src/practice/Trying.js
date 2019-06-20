import React, { Component } from 'react';
import {connect} from "react-redux";

class Trying extends Component {
    render() {
        return (
            <div>
              <h2>{this.props.a}</h2>  
              <button onClick={this.props.onAgeUp}>button A</button>
              <h2>{this.props.b}</h2>
              <button onClick={this.props.onAgeDown}>button B</button>
              <h2>{this.props.c}</h2>
              <button onClick={this.props.onAgeUps}>button C</button>  
              <h2>{this.props.d}</h2>
              <button onClick={this.props.onAgeDowns}>button D</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
       a : state.a,
       b : state.b,
       c : state.c,
       d : state.d
    };
};

const mapDispatchToProps=(dispatch)=>{
return{
   onAgeUp:()=>dispatch({type : "AGE_UP"}),
    onAgeDown:()=>dispatch({type : "AGE_DOWN"}),
    onAgeUps:()=>dispatch({type : "AGE_UPS"}),
    onAgeDowns:()=>dispatch({type : "AGE_DOWNS"})
};
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Trying);