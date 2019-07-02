import React, { Component } from 'react';

class FormObject extends Component {
  
  constructor() {
    super();
    this.state = {
      name: '',
      city : ''
    };
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value});
    // console.log(this.state.name)
  }
 
  handleClick=(e)=>{
    e.prventDefault();
    const reqobj ={
      name : this.state.name,
      city : this.state.city
    }
   console.log(reqobj);
  }

  render() {
    return (
      <div>
        <form>
          <label>name</label>
         <input type="text" name="name" onChange={this.handleChange}></input>

          <label>city</label>
          <input type="text" name="city" onChange={this.handleChange}></input>

          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormObject;