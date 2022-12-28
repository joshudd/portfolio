import React, { Component } from "react";
import "../styles/About.css";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="about">
        <div className="about-header">{"< about >"}</div>

        <div className="about-content">
          {"I'm an undergraduate student at the "}
          <span className="about-content-primary">University of Minnesota</span>
          {" pursuing a "}
          <span className="about-content-secondary">Bachelor of Science</span>
          {" degree in "}
          <span className="about-content-secondary">Computer Science</span>
          {
            ", and I am eager to take on opportunities where I can learn, grow, and make a meaningful contribution. Some of my work has been with the following technologies:"
          }
          <p className="about-content-list">
            React.js, GraphQL, JUCE, Java, Python, Django, HTML + CSS
          </p>
          {
            "My interests include human-computer interaction, artificial intelligence, and computer vision.\n"
          }
          {" Outside of code, I love to both listen to and create music. "}
          {"Especially jazz."}
        </div>
      </div>
    );
  }
}

export default About;
