import React, { Component } from "react";
export default class Counter extends Component {
  componentDidMount() {
    console.log(this.props.increment);
  }
  add = () => {
    let { value } = this.refs.op1;
    this.props.increment(value * 1);
  };
  dec = () => {
    let { value } = this.refs.op1;
    this.props.decrement(value * 1);
  };
  odd = () => {
    let { value } = this.refs.op1;
    if (this.props.count % 2 === 1) {
      this.props.increment(value * 1);
    }
  };
  async = () => {
    let { value } = this.refs.op1;
    this.props.incrementAsync(value*1,1000)
    // setTimeout(() => {
    //   this.props.increment(value * 1);
    // }, 1000);
  };
  render() {
    return (
      <div>
        <h3>当前计数为{this.props.count}</h3>
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
