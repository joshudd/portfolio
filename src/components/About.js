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
            ". My interests include human-computer interaction, recommender systems, and computer vision, and I am eager to take on opportunities where I can learn, grow, and make a meaningful contribution."
          }
          <br></br>
          <br></br>
          {"Some of my experience is with,"}
          <p className="about-content-list">
            React.js GraphQL JUCE P5.js Java Python Django JavaScript
          </p>
          {"I also love listening to and creating music."}
          <br></br>
          {"Especially jazz."}
        </div>
      </div>
    );
  }
}

export default About;
