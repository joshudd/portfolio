import React, { Component } from "react";
import "../styles/Projects.css";
class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="projects">
        <div className="projects-header">{"< projects >"}</div>
        {"I have a lot of experience, I swear."}
      </div>
    );
  }
}

export default Projects;
