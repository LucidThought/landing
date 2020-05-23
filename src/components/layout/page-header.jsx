import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopSlideshow from "./slideshow";

import "./page-header.scss";

const PageHeader = () => {
  return (
    <Container className="no-border">
      <header className="header-menu-white-back">
        <img src="/header/exyteLogo.png" alt="logo" id="logo" />
        <ul id="horizontal-menu">
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">Services</a>
          </li>
          <li>
            <a href="./">Portfolio</a>
          </li>
          <li>
            <a href="./">Team</a>
          </li>
          <li>
            <a href="./">Blog</a>
          </li>
          <li>
            <a href="./">Contacts </a>
          </li>
        </ul>
        <Container className="social-icons">
          <a href="www.instagram.com" id="social-icon">
            <img src="/header/instagram.png" alt="Instagram" />
          </a>
          <a href="www.twitter.com" id="social-icon">
            <img src="/header/twitter.png" alt="Twitter" />
          </a>
          <a href="www.github.com" id="social-icon">
            <img src="/header/github.png" alt="GitHub" />
          </a>
        </Container>
      </header>
      <Container className="no-border">
        <Row>
          <TopSlideshow />
        </Row>
        <Row className="align-items-center header-foot">
          <Col xs={2} sm={2} className="align-self-center centered-items">
            <div className="exyte-copyright">&copy; Exyte 2018</div>
          </Col>
          <Col xs={2} sm={2} className="align-self-center centered-items">
            <img src="/header/scroll.png" alt="Scroll to see more" />
          </Col>
          <Col
            xs={14}
            sm={"auto"}
            className="col-md-auto contrast-affiliate-links centered-items"
          >
            Companies horizontal slide list
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PageHeader;
