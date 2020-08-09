import React, { Component } from "react";

export default class Node extends Component {
  render() {
    const { row, col } = this.props;
    return (
      <div
        className="node"
        id={`node-${row}-${col}`}
        onClick={() => {
          if (this.props.playing === false) {
            this.props.setStartNode({ row, col });
          }
        }}
      ></div>
    );
  }
}
