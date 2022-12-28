import React from "react";
import "../styles/Head.css";

class Head extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="head">
        <div className="head-title">
          <span className="head-p1">{"hello"}</span>
          <span className="head-p2">{", "}</span>
          <span className="head-p3">{"i'm "}</span>
          <span className="head-title-name">josh</span>
        </div>
        <div>
          <p className="head-desc">based in the twin cities</p>
        </div>
      </div>
    );
  }
}

export default Head;
