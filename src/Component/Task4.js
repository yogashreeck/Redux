import React, { Component } from 'react';




class Task4 extends React.Component {
  constructor(props) {  
    super(props);   
this.state={
    name:'',
    age:'',
    city:'',
    address:''
}
}
handleChange=(e)=>{
this.setState({[e.target.name]:e.target.value});

}
handleClick=()=>{
this.setState({name1:this.state.name,age1:this.state.age,city1:this.state.city,address1:this.state.address,
});
}

render() {
    return (
        <div >
            <form>
                <label>Name</label><br></br>
                <input type='text' name='name' onChange={this.handleChange} ></input><br></br>
                <label>Age</label><br></br>
                <input type='text' name='age' onChange={this.handleChange} ></input><br></br>
                <label>City</label><br></br>
                <input type='text' name='city' onChange={this.handleChange} ></input><br></br>
                <label>Address</label><br></br>
                <input type='text' name='address' onChange={this.handleChange} ></input><br></br>
                
                <button type='button' onClick={this.handleClick}>submit</button>
               

            </form>
            <div>
              <h1 >NAME</h1>
             <p>{this.state.name1}</p>
              <h1 >AGE</h1>
              <p>{this.state.age1}</p>
              <h1>CITY</h1>
              <p >{this.state.city1}</p>
              <h1>ADDRESS</h1>
              <p>{this.state.address1}</p>
            </div>
          </div>
    );
}
}


export default (Task4);