import React, { Component } from "react";
import SkillBar from "react-skillbars";
import { ServerAddr } from "../../NetConf";
import "./About.css";
import { Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";

class About extends Component {
  state = {
    collapsed: true,
    SKILLS: [],
    skillcolours: {
      bar: "#00A1A7",
      title: {
        text: "#fff",
        background: "#04C2C9",
      },
    },
  };

  getSkills = () => {
    ServerAddr.get("skill/").then((res) => {
      // console.log("skills", res);
      if ((res["status"] = 200)) {
        var data = res["data"]["results"];
        var skills = [];
        //convert skills to data requested by the lib.
        data.forEach((element) => {
          var obj = {
            type: element["name"],
            level: element["exp"],
          };
          skills.push(obj);
        });
        this.setState({ SKILLS: skills });
      } else {
      }
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 5000);
    this.getSkills();
  }
  render() {
    const { SKILLS, skillcolours } = this.state;
    return (
      <div>
        <div style={{ height: 100 }}></div>
        <p className="titletext">About</p>
        <hr className="customhr" />
        <div style={{ height: 100 }}></div>
        <Row>
          <Col md={6}>
            <div className="userimgdiv">
              <Slide left delay={200} duration={3000}>
                <div>
                  <img
                    className="userimg1"
                    src={require("../../../media/ianfullimage.jpg")}
                  />
                </div>
              </Slide>
            </div>
          </Col>
          <Col md={6}>
            <Slide right delay={400} duration={3000}>
              <div className="descriptionwrapper">
                <div className="descriptiondiv">
                  <h3 style={{ textAlign: "center", color: "#616161" }}>
                    Who's this guy?
                  </h3>
                  <p className="desctext">
                    I am a passionate computer engineer and full-stack developer
                    with more than two years of experience. Its my passsion to
                    build web and mobile applications. This is a personal
                    website created by me, providing insights of my professional
                    interests, experiences, Feel free to look around.
                  </p>
                </div>
              </div>
              <SkillBar skills={SKILLS} colors={skillcolours} height={22} />
            </Slide>
          </Col>
        </Row>
        <div style={{ height: 100 }}></div>
      </div>
    );
  }
}

export default About;
