import React, { Component, useState } from "react";
import "./Project.css";
import { Button } from "react-bootstrap";
import { Row, Col, Alert, Modal } from "react-bootstrap";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { ServerAddr } from "../../NetConf";
import Slide from "react-reveal/Zoom";

class Project extends Component {
  state = {
    projects: [],
    projectData: {}
  };
  componentDidMount() {
    this.getProjects();
  }
  handleShow = data => {
    this.setState({ show: true, projectData: data });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  getProjects = () => {
    ServerAddr.get("project/").then(res => {
      // console.log("project", res);
      if ((res["status"] = 200)) {
        var data = res["data"]["results"];
        this.setState({ projects: data });
      } else {
      }
    });
  };
  render() {
    const { show, projects, projectData } = this.state;
    const divStyle = src => ({
      backgroundImage: "url(" + src + ")"
    });
    const customstyle = {
      display: "contents"
    };
    return (
      <div>
        <p className="titletext">Portfolio</p>
        <hr className="customhr" />
        <div style={{ height: 100 }}></div>

        <Row className="galleryrow">
          {projects.map((project, i) => {
            return (
              <Col md={4} key={i} style={{ paddingRight: 0, paddingLeft: 0 }}>
                <div className="gallery1div">
                  <div
                    className="image1"
                    style={divStyle(project.images_set[0]["image"])}
                  />
                  <div className="imgoverlay">
                    <div className="buttonmaindiv">
                      <p>{project.title}</p>
                      <p> {project.tech} </p>
                      <div
                        style={{ marginLeft: "30%" }}
                        className="custombutton"
                        onClick={() => this.handleShow(project)}
                      >
                        <p> Learn More</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* MODAL */}
        <Modal onHide={this.handleClose} size="lg" show={show}>
          <Modal.Body style={{ padding: 0 }}>
            <div>
              {projectData["images_set"] ? (
                <Slider duration="1800">
                  {projectData["images_set"].map((article, index) => (
                    <div
                      key={index}
                      className="image1"
                      style={divStyle(article.image)}
                    />
                  ))}
                </Slider>
              ) : (
                ""
              )}
            </div>
            <div className="descriptiondiv">
              <p>{projectData.title}</p>
              <p>{projectData.tech}</p>
              <hr />
              <p>{projectData.discription}</p>
            </div>
            <div />
          </Modal.Body>
          <Modal.Footer>
            <div className="custombutton" onClick={this.handleClose}>
              <p>Close</p>
            </div>
          </Modal.Footer>
        </Modal>
        <div style={{ height: 100 }}></div>
      </div>
    );
  }
}

export default Project;
