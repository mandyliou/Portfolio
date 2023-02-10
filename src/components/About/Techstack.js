import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { skillData } from "./data";


export default function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="mt-3">
      {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>

  );
}


