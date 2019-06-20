import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onAgeUp, onAgeDown} from '../Action/AgeUpDownAction';

class Ageupdown extends Component{
render (){
return(
<div>
<h1>Your Age: <span>{this.props.age}</span></h1>
<button onClick={this.props.onAgeUp}> ageup</button>
<button onClick={this.props.onAgeDown}>agedown</button>
</div>
);
}
}
const mapStateToProps=(state)=>{
const {age} = state.AgeupdownReducer;
return {age};

};
export default connect (mapStateToProps,{onAgeUp,onAgeDown})(Ageupdown);