import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopSlideshow from "./slideshow";
import AffiliateCarousel from "./affiliate-carousel";

import "./header-content.scss";

const HeaderContent = () => {
  return (
    <Container className="no-border">
      <Row className="no-border">
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
          <AffiliateCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderContent;
