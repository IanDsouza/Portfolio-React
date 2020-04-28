import React, { Component } from "react";
import "./Landing.css";
import Project from "../../Components/Projects/Project";
import Experience from "../../Components/Experience/Experience";
import About from "../../Components/About/About";
import Edu from "../../Components/Edu&qualification/Edu";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Layouts/Footer/Footer";
import Home from "../../Components/Home/Home";
import Navbar from "../Navbar/Navbar";
import { Element, animateScroll as scroll } from "react-scroll";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Element name="about" className="element">
            <About />
          </Element>

          <Element name="project" className="element">
            <Project />
          </Element>

          <Element name="experience" className="element">
            <Experience />
          </Element>

          <Element name="education" className="element">
            <Edu />
          </Element>
        </div>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default Landing;
