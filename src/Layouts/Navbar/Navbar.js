import React, { Component } from "react";
import "./Navbar.css";
import Home from "../../Components/Home/Home";
import { Link, Events, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);

    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }

  scrollToTop() {
    // scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  componentDidUpdate() {
    // this.state.scroll > this.state.top
    //   ? (document.body.style.paddingTop = `${this.state.height}px`)
    //   : (document.body.style.paddingTop = 0);
  }

  handleClick = () => {
    console.log("inside click");

    this.setState({ show: !this.state.show });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <Home />

        <header>
          <nav
            style={{ zIndex: 5 }}
            className={
              this.state.scroll > this.state.top && !show
                ? " fixed-nav  active"
                : ""
            }
          >
            <ul>
              <li>
                {" "}
                <Link
                  activeClass=""
                  className="header"
                  to=""
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={this.scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  activeClass=""
                  className="header"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  activeClass=""
                  className="header"
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  activeClass=""
                  className="header"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Experience
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  activeClass=""
                  className="header"
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  activeClass=""
                  className="header"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact US
                </Link>
              </li>
            </ul>
          </nav>
          <div onClick={() => this.handleClick()} className={"menu-toggle"}>
            <img src={require("../../../media/lines.png")} />
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
