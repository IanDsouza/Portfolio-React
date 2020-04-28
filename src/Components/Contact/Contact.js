import React, { Component } from "react";
import "./Contact.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

class Contact extends Component {
  render() {
    return (
      <div>
        <section>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 102"
            height="75"
            width="100%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="svgcolor-light"
          >
            <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
          </svg>

          <div className="title" />
          <Slide left delay={300} duration={3000}>
            <p className="titletextc">Contact</p>
            <hr
              className="customhr"
              style={{ borderColor: "white", marginTop: "1rem" }}
            />
          </Slide>

          <Slide right delay={500} duration={3000}>
            <p id="worktext">Have a question or want to work together?</p>
          </Slide>
          <div />
          <Zoom delay={1000}>
            <div id="inputwrapper">
              <input placeholder="Name" type="text" name="name" required="" />
              <input placeholder="Email" type="text" name="email" required="" />
              <textarea
                style={{ minHeight: 150, marginBottom: 5 }}
                placeholder="Your message "
                type="text"
              />
              <div className="custombuttoncontact" onClick={this.handleClose}>
                <p>SUBMIT</p>
              </div>
            </div>
          </Zoom>
        </section>
      </div>
    );
  }
}

export default Contact;
