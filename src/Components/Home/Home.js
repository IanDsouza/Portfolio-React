import React, { Component } from "react";
import "./Home.css";
import { Link, Events, animateScroll as scroll } from "react-scroll";

class Home extends Component {
  state = {
    tasks: 0
  };

  render() {
    return (
      <div id="container">
        <div className="banner" />
        <div className="flex"></div>
        <div className="introdiv">
          <p className="devicetext">
            Hi, I'm <span className="highlight">IAN DSOUZA</span>
          </p>
          <p>I'm a Full Stack Developer...</p>
        </div>

        <div onClick={() => scroll.scrollMore(1400)} className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className="custombutton device"
          onClick={() => scroll.scrollMore(1400)}
        >
          <p>View My Work</p>
        </div>
      </div>
    );
  }
}
export default Home;
