import React, { Component } from "react";
import { ServerAddr } from "../../NetConf";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import "./Experience.css";

class Experience extends Component {
  state = {
    experiences: [],
  };
  componentDidMount() {
    this.getExperience();
  }
  getExperience = () => {
    ServerAddr.get("experience/").then((res) => {
      // console.log("experience/", res);
      if (res["status"] == 200) {
        var data = res["data"]["results"];
        console.log("exp", data);
        this.setState({ experiences: data });
      } else {
      }
    });
  };

  render() {
    const { experiences } = this.state;

    return (
      <div>
        <p className="titletext">Experience</p>
        <hr className="customhr" />
        <div style={{ height: 100 }}></div>

        <Zoom top>
          <div className="timeline">
            {experiences.map((exp, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="container1 left">
                    <div className="content1">
                      <div className="row ">
                        <div style={{ width: "66%" }}>
                          <p className="experiencetitle">{exp.title}</p>
                          <p className="companyname">{exp.company}</p>

                          {exp.end_date != undefined ? (
                            <p className="date">
                              {" "}
                              {exp.start_date} - {exp.end_date}{" "}
                            </p>
                          ) : (
                            <p className="date"> {exp.start_date} - Present </p>
                          )}
                        </div>
                        <div style={{ width: "34%" }}>
                          <img
                            className="logo"
                            src={
                              exp.logo
                                ? exp.logo
                                : "https://dummyimage.com/600x400/04c2c9/f2f3ff"
                            }
                          />
                        </div>
                      </div>
                      <p className="description">{exp.discription}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="container1 right">
                    <div className="content1">
                      <div className="row ">
                        <div style={{ width: "34%" }}>
                          <img
                            className="logor"
                            src={
                              exp.logo
                                ? exp.logo
                                : "https://dummyimage.com/600x400/04c2c9/f2f3ff"
                            }
                          />
                        </div>
                        <div style={{ width: "66%" }}>
                          <p className="experiencetitler">{exp.title}</p>
                          <p className="companynamer">{exp.company}</p>
                          <p className="dater">
                            {" "}
                            {exp.start_date} - {exp.end_date}{" "}
                          </p>
                        </div>
                      </div>
                      <p className="descriptionr">{exp.discription}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </Zoom>
        <div style={{ height: 100 }}></div>
      </div>
    );
  }
}

export default Experience;
