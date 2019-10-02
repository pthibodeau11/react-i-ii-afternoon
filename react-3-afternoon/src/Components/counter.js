import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    this.state = {
      count: 0
    };
  }

  render() {
    return <p>{this.state.count}</p>;
  }
}
