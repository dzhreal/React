import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  add = () => {
    let { value } = this.refs.op1;
    let { count } = this.state;
    this.setState({ count: count + value * 1 });
  };
  dec = () => {
    let { value } = this.refs.op1;
    let { count } = this.state;
    this.setState({ count: count - value * 1 });
  };
  odd = () => {
    let { value } = this.refs.op1;
    let { count } = this.state;
    if (count % 2 === 1) {
      this.setState({ count: count + value * 1 });
    }
  };
  async = () => {
    let { value } = this.refs.op1;
    let { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + value * 1 });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h3>当前计数为{this.state.count}</h3>
        <select name="" id="" ref="op1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.dec}>-</button>
        <button onClick={this.odd}>incrementOdd</button>
        <button onClick={this.async}>incrementAsync</button>
      </div>
    );
  }
}
