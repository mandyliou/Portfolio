import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "2px",
              paddingBottom: "50px",
              marginRight: "88px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to Know <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "88px", paddingBottom: "50px", opacity: 0.92  }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>
        <Techstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
