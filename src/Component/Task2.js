import React, { Component } from "react";
import { connect } from "react-redux";
import { updateA, updateB,updateC, updateD} from '../Action/Task2';

class Task2 extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span>
            <span>{this.props.a}</span>
          </div>
          <button onClick={() => this.props.updateA(this.props.c)}>
            Update A
          </button>
        </div>
        <div className="col">
          <div>
            <span>B:</span>
            <span>{this.props.b}</span>
          </div>
          <button onClick={() => this.props.updateB(this.props.d)}>
            Update B
          </button>
        </div>
        <div className="col">
          <div>
            <span>C:</span>
            <span>{this.props.c}</span>
          </div>
          <button onClick={() => this.props.updateC(this.props.a)}>
            Update C
          </button>
        </div>
        <div className="col">
          <div>
            <span>D:</span>
            <span>{this.props.d}</span>
          </div>
          <button onClick={() => this.props.updateD(this.props.d)}>
            Update D
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    a: state.Task2a.a,
    b: state.Task2b.b,
    c: state.Task2c.c,
    d: state.Task2d.d
  
  };
};

export default connect(
  mapStateToProps,({updateA,updateB,updateC, updateD})
  // mapDispachToProps
)(Task2);