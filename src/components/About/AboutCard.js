import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Steevan Gonsalves </span>
            from <span className="purple"> Mangaluru, India.</span>
            <br />
            I am currently studying 4th Year Computer Science Engineering at St Joseph Engineering College.
            <br />
            Apart from Studying, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every day is a chance of a life time"{" "}
          </p>
          <footer className="blockquote-footer">Steevan Gonsalves</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;