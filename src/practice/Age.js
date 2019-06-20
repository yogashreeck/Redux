import React, { Component } from 'react';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age : 25,
      show: true
    };
  }

  AdditionOpt = () => {
    this.setState({ age: this.state.age + 1 });
  }

 SubstractionOpt = () => {
  if (this.state.age > 0) {
    this.setState({ age: this.state.age - 1 });
  }
  }

  render() {
    return (
      <div className="disply">
        <div className="age">
        <h2>{ this.state.age}</h2>
        <button onClick={this.AdditionOpt }>Increment</button>
        </div>
         <div className="age">
        <button onClick={this.SubstractionOpt }>Decrement</button>
        </div>
      </div>
    );
  }
}







export default Add;