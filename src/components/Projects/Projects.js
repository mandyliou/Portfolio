import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitster from "../../Assets/Projects/fitster.png";
import cars from "../../Assets/Projects/cars.png";
import event from "../../Assets/Projects/event.png";
import finance from "../../Assets/Projects/finance.png";
import jobFinder from "../../Assets/Projects/jobFinder.png";
// testing

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's a few projects I've worked on recently!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={jobFinder}
            isBlog={false}
            title="JobFinder"
            description="A mobile app developed in React Native, JobFinder revolutionizes job hunting by curating real-time listings from multiple platforms via RapidAPI. Seamlessly hosted on Expo, its adaptive UI/UX ensures quick access and instant updates, elevating the efficiency of your job search."


            ghLink="https://github.com/mandyliou/JobFinder"
          />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="FinTrackML"
              description="A comprehensive financial data analytics application, developed using the MERN stack. It integrates machine learning for predictive revenue modeling, offering real-time KPI tracking and transaction analysis, serving as a critical tool for data-driven financial decision-making."
              ghLink="https://github.com/mandyliou/FinTrackML"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitster}
              isBlog={false}
              title="Fitster"
              description="A user-friendly, web-based platform for fashion lovers to showcase and explore personalized outfits. With secure authentication, users can create accounts to ensure privacy and protection of their personal information."
              ghLink="https://github.com/mandyliou/fitster"
              demoLink="https://mandy-diner.gitlab.io/fitster/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cars}
              isBlog={false}
              title="Auto Log"
              description="This innovative solution is designed specifically for car dealerships to streamline the process of scheduling service appointments and efficiently track sales records. With its functionality, this project aims to enhance the overall efficiency and productivity of car dealerships."
              ghLink="https://github.com/mandyliou/auto-log"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event Planner"
              description="This project involves the creation of a conference management system and integration of third-party APIs for location and weather data. The integration of these APIs enhances the overall user experience and provides up-to-date and relevant information for attendees."
              ghLink="https://github.com/mandyliou/event-planner"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
