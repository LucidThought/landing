import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./page-body.scss";

const PageBody = () => {
  const [numEngineers, setNumEngineers] = useState(0);
  const [numProjects, setNumProjects] = useState(0);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5ecaf6b83000002b00ddd474", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setNumEngineers(response.servicesStats.numEngineers);
        setNumProjects(response.servicesStats.numProjects);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Container className="body-section">
      <Row className="no-margin-left-right row-buffer">
        <Col xs sm={3}></Col>
        <Col xs sm={2}>
          <div className="l-title">Services</div>
        </Col>
        <Col xs sm={4}>
          <div className="m-title">
            A team of programming experts and designing professionals develops,
            designs, runs tests, and/or manages software development for the
            below-written:
          </div>
        </Col>
        <Col xs sm={3}></Col>
      </Row>
      <Row className="no-margin-left-right row-buffer">
        <Col xs sm={3}></Col>
        <Col xs sm={2}>
          <div className="xl-title">{numEngineers}</div>
          <div>Engineers</div>
        </Col>
        <Col xs sm={2}>
          <img src="/services/team.png" alt="Team" />
          <h4>Laser Beam Dedicated Team</h4>
          <div>Assemble your dev team</div>
          <a href="/">Learn more</a>
        </Col>
        <Col xs sm={2}>
          <img src="/services/ios.png" alt="iOS" />
          <h4>No-stress iOS</h4>
          <div>Application dev for apple devices</div>
          <a href="/">Learn more</a>
        </Col>
        <Col xs sm={3}></Col>
      </Row>
      <Row className="no-margin-left-right row-buffer">
        <Col xs sm={3}></Col>
        <Col xs sm={2}>
          <div className="xl-title">{numProjects}</div>
          <div>Projects</div>
        </Col>
        <Col xs sm={2}>
          <img src="/services/blockchain.png" alt="Blockchain" />
          <h4>Humane Blockchain</h4>
          <div>Blockchain applications and smart contracts dev</div>
          <a href="/">Learn more</a>
        </Col>
        <Col xs sm={2}>
          <img src="/services/ar.png" alt="AR" />
          <h4>Superstar AR</h4>
          <div>Augmented reality applications dev for Apple devices</div>
          <a href="/">Learn more</a>
        </Col>
        <Col xs sm={3}></Col>
      </Row>
      <Row className="no-margin-left-right row-buffer">
        <Col xs sm={3}></Col>
        <Col xs sm={2}></Col>
        <Col xs sm={2}>
          <img src="/services/vr.png" alt="VR" />
          <h4>Tsar VR</h4>
          <div>Virtual reality applications dev</div>
          <a href="/">Learn more</a>
        </Col>
        <Col xs sm={2}>
          <img src="/services/machinelearning.png" alt="Machine Learning" />
          <h4>Burning Machine Learning</h4>
          <div>Machine learning functionalities dev</div>
          <a href="/">Learn more</a>
        </Col>
        <Col xs sm={3}></Col>
      </Row>
    </Container>
  );
};

export default PageBody;
