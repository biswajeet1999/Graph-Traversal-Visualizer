import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.setAlgo = this.setAlgo.bind(this);
  }

  setAlgo(algo) {
    this.props.setAlgo(algo);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="!#">
          Graph Traversal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="!#"
                onClick={() => this.setAlgo("BFS")}
              >
                BFS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="!#"
                onClick={() => this.setAlgo("DFS")}
              >
                DFS
              </a>
            </li>
          </ul>
          <button
            className="btn btn-outline-success"
            disabled={this.props.playing ? true : false}
            onClick={() => {
              this.props.playAlgo();
            }}
          >
            Play
          </button>
          <button
            className="btn btn-outline-success mx-5"
            onClick={this.props.clearBoard}
          >
            Clear Board
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
