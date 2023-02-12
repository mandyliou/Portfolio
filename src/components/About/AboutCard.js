import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hello! I'm <span className="purple">Mandy Liou, </span>
            a passionate full-stack developer from <span className="purple"> Los Angeles, CA. </span>
            {/* <br /> */}
            {/* <br /> */}
            With a graduate degree from Hackreactor and Google Data Analytics certification, I bring over 1000+ hours of coding experience in designing, building and deploying high-quality applications. My technical skillsets includes <span className="purple">Python, Javascript, SQL, React, HTML, CSS, Docker, Django, FastAPI, RESTful API, PostgreSQL, and CI/CD.</span>

            <br />
 <br /> My experience as a former doctoral student, combined with 7 years in healthcare, has equipped me to excel in high-pressure, time-sensitive team environments. Passionate about using technology to bring positive changes, I am eager to join a team of driven individuals with a shared vision. If you're looking for a motivated and enthusiastic team player, feel free to connect with me at <a className="purple" href = "mailto: mandyliou@alumni.emory.edu">mandyliou@alumni.emory.edu</a> or via <a className="purple" href = "https://www.linkedin.com/in/mandyliou/">LinkedIn.</a>
 <br />
            <br />
            <br />
            Apart from coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
