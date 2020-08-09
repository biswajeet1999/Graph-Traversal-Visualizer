import React, { Component } from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";
import "./App.css";
import BFS from "./algo/BFS";
import DFS from "./algo/DFS";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      algo: "",
      grid: [],
      msg: "",
      start: { row: 0, col: 0 },
    };
    this.setAlgo = this.setAlgo.bind(this);
    this.setNodes = this.setNodes.bind(this);
    this.playAlgo = this.playAlgo.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.setStartNode = this.setStartNode.bind(this);
  }

  setAlgo(algo) {
    this.setState({ algo, msg: "" });
  }

  setNodes(grid) {
    this.setState({ grid });
  }

  async setStartNode(start) {
    this.unsetStartNode();
    document.getElementById(`node-${start.row}-${start.col}`).className +=
      " startNode";
    await this.setState({ start });
  }

  unsetStartNode() {
    let className = document.getElementById(
      `node-${this.state.start.row}-${this.state.start.col}`
    ).className;
    document.getElementById(
      `node-${this.state.start.row}-${this.state.start.col}`
    ).className = className.replace("startNode", "");
  }

  async playAlgo() {
    if (!this.state.playing && this.state.algo === "BFS") {
      this.setState({ msg: "" });
      await this.setState({ playing: true });
      await BFS(this.state.grid, this.state.start);
      await this.setState({ playing: false });
    } else if (!this.state.playing && this.state.algo === "DFS") {
      await this.setState({ msg: "", playing: true });
      await DFS(this.state.grid, this.state.start);
      await this.setState({ playing: false });
    } else {
      await this.setState({ msg: "Select algorithm" });
    }
  }

  async clearBoard() {
    if (this.state.playing === false) {
      this.setState({ algo: "" });
      this.setState({ start: { row: 0, col: 0 } });
      for (let row of this.state.grid) {
        for (let node of row) {
          node.visited = 0;
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node";
        }
      }
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar
          setAlgo={this.setAlgo}
          playing={this.state.playing}
          playAlgo={this.playAlgo}
          clearBoard={this.clearBoard}
        />
        {this.state.msg && (
          <div class="alert alert-warning text-center" role="alert">
            {this.state.msg}
          </div>
        )}
        <div className="grid-wrapper">
          <div className="grid">
            <Grid
              setNodes={this.setNodes}
              nodes={this.state.grid}
              setStartNode={this.setStartNode}
              playing={this.state.playing}
              startNode={this.state.start}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
