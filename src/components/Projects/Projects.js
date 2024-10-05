import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Mood from "../../Assets/Projects/mood.png";
import Agri from "../../Assets/Projects/agri.png";
import Real from "../../Assets/Projects/realest.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agri}
              isBlog={false}
              title="AgricultureManagement"
              description="Technology: HTML, JavaScript, CSS, MySQL
Agriculture Management System (AMS) connects farmers and buyers, ensuring quality and transparency through technology, revolutionizing transactions and offering potential for broader reach and sustainability."
              ghLink="https://github.com/stevengonsalves/AgricultureManagement"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Real}
              isBlog={false}
              title="Real Estate Prediction"
              description="Technology: ML (linear regression), CSS, HTML, JS
Designed, developed, and deployed a Real Estate prediction model using AI/ML techniques, incorporating it into a user-friendly web application with Flask, facilitating real-time Flat or Room valuation for users."
              ghLink="https://github.com/stevengonsalves/RealEstatePrediction"
              demoLink="https://youtu.be/Wn_jsPLrCFg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mood}
              isBlog={false}
              title="Mood Music Detector"
              description="Technology: ML algorithm (CNN), Python, CSS, JS, HTML
A Mood Music Detector uses a Convolutional Neural Network (CNN) to identify a listener's emotional state based on their current mood. The project aims to enhance user experience by tailoring music recommendations to the detected mood"
              ghLink="https://github.com/stevengonsalves/MoodMusicDetector"
              demoLink="https://youtu.be/3iikGt0iv3k"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;