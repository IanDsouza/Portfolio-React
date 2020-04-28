import React, { Component } from "react";
import { Row, Col, Alert, Modal } from "react-bootstrap";
import "./Edu.css";
import { ServerAddr } from "../../NetConf";

class Edu extends Component {
  state = {
    eduList: []
  };

  componentDidMount() {
    this.getEdu();
  }
  getEdu = () => {
    ServerAddr.get("academic/").then(res => {
      // console.log("academic/", res);
      if (res["status"] == 200) {
        var data = res["data"]["results"];
        this.setState({ eduList: data });
      } else {
      }
    });
  };
  render() {
    const { eduList } = this.state;
    // console.log("edulistt", eduList);

    return (
      <div>
        <p className="titletext">Academics</p>
        <hr className="customhr" />
        <div style={{ height: 100 }}></div>
        <div className="customdiv">
          {eduList.map((edu, i) => {
            return (
              <Row key={i}>
                <Col md={4} xs={12}>
                  <img
                    className="userimg"
                    src={
                      edu.image
                        ? edu.image
                        : "https://dummyimage.com/600x400/04c2c9/f2f3ff"
                    }
                  />
                </Col>
                <Col md={8} xs={12}>
                  <div style={{ textAlign: "center" }}>
                    <b>{edu.title} </b>
                    <p>{edu.discription} </p>
                    <p>
                      {" "}
                      {edu.start_date} - {edu.end_date}
                    </p>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>

        <div />
        <div style={{ height: 100 }}></div>
      </div>
    );
  }
}
export default Edu;
