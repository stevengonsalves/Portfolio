import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumeImage from "../../Assets/resume-image.jpg"; // Import your resume image
import { AiOutlineDownload } from "react-icons/ai";

// Function to open the image in fullscreen mode
const openFullscreen = (imgSrc) => {
  const imageWindow = window.open("");
  imageWindow.document.write(`<img src="${imgSrc}" style="width:100%; height:auto;">`);
};

function ResumeNew() {
  const [width] = useState(window.innerWidth); // Keep track of window width for responsiveness

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeImage}
            download="Steevan_Gonsalves_Resume.jpg" // Download file with this name
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", marginTop: "20px" }}>
          {/* Display Resume Image */}
          <img
            src={resumeImage} 
            alt="Steevan Gonsalves Resume"
            style={{ width: width > 786 ? "60%" : "100%", cursor: "pointer" }} 
            onClick={() => openFullscreen(resumeImage)} // On click, open image in fullscreen
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumeImage}
            download="Steevan_Gonsalves_Resume.jpg" // Download file with this name
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
