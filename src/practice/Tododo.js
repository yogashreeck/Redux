import React, { Component } from 'react';

class Tododo extends Component {
    constructor(props) {
    super(props);

    this.state = {
      value: '',
      list: [],
    };
  }

  onChangeValue = event => {
    this.setState(this.textInput.value);
  };

  onAddItem = () => {
     return {
        value: '',
      };
     };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Tododo;