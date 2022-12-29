import React from "react";
import "../styles/Head.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Email } from "@mui/icons-material";

class Head extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="head">
        <div className="head-title">
          <span className="head-part">{"hello"}</span>
          <span className="head-part">{", "}</span>
          <span className="head-part">{"i'm "}</span>
          <span className="head-title-name">josh</span>
        </div>
        <div>
          <p className="head-desc">based in the twin cities</p>
        </div>
        <div className="head-icons">
          <a
            href={"https://github.com/joshudd"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              className="github"
              style={{
                fontSize: 48,
                color: "#1B191A",
              }}
            ></GitHubIcon>
          </a>
          <a href={"mailto:josh25dickinson@gmail.com"}>
            <EmailOutlinedIcon
              className="email"
              style={{
                fontSize: 48,
                color: "#1B191A",
              }}
            ></EmailOutlinedIcon>
          </a>
          <a
            href={"https://linkedin.com/in/joshuadickinson111"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              className="linkedin"
              style={{
                fontSize: 48,
                color: "#1B191A",
              }}
            ></LinkedInIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default Head;
