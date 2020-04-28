import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "../src/Layouts/Landing/Landing";
import Project from "../src/Components/Projects/Project";
import Experience from "../src/Components/Experience/Experience";
import About from "../src/Components/About/About";
import Edu from "../src/Components/Edu&qualification/Edu";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Layouts/Footer/Footer";
import Home from "../src/Components/Home/Home";
import Navbar from "../src/Layouts/Navbar/Navbar";
import ReactGA from "react-ga";

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-148461227-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
