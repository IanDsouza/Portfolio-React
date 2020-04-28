import React, { Component } from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="icons">
          <SocialIcon
            url="https://www.linkedin.com/in/IanDsouza6967"
            target="_blank"
            bgColor=" #262F38"
            fgColor="white"
          />

          <SocialIcon
            url="https://www.facebook.com/eandsouza"
            target="_blank"
            bgColor=" #262F38"
            fgColor="white"
          />
          <SocialIcon
            url="https://instagram.com/ian__0306"
            target="_blank"
            bgColor=" #262F38"
            fgColor="white"
          />
          <SocialIcon
            url="https://github.com/IanDsouza"
            target="_blank"
            bgColor=" #262F38"
            fgColor="white"
          />
          <SocialIcon
            url="https://stackoverflow.com/users/7909608/ian-dsouza"
            target="_blank"
            bgColor=" #262F38"
            fgColor="white"
          />
        </div>
        <div className="footnote">
          IAN DSOUZA <span className="highlight">©2019</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
