import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./header-components/navbar";
import HeaderContent from "./header-components/header-content";

import "./page-header.scss";

const PageHeader = () => {
  return (
    <Container className="no-border">
      <Navbar />
      <HeaderContent />
    </Container>
  );
};

export default PageHeader;
