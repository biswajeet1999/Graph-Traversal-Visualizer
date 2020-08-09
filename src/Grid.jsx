import React, { Component } from "react";
import Node from "./Node";
// Total width is 90vw. we create 50 cols. each col width is 1.8vw.
// Total height is 90vh. we create 50 rows. each row height is 1.8vh.

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 80,
      rows: 40,
    };
  }

  componentDidMount() {
    let nodes = [];
    for (let row = 0; row < this.state.rows; row++) {
      let currentRow = [];
      for (let col = 0; col < this.state.cols; col++) {
        currentRow.push({ row, col, visited: 0 }); // status: 0=> not visited,  1=> waiting,   2=> visited
      }
      nodes.push(currentRow);
    }
    this.props.setNodes(nodes);
  }

  render() {
    return (
      <div className="board">
        {this.props.nodes.map((row, rowIdx) => {
          return (
            <div className="row" key={rowIdx}>
              {row.map((col, colIdx) => {
                return (
                  <Node
                    key={colIdx}
                    row={rowIdx}
                    col={colIdx}
                    setStartNode={this.props.setStartNode}
                    playing={this.props.playing}
                    startNode={this.props.start}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grid;
