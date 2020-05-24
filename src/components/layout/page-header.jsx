import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./header-components/navbar";

import "./page-header.scss";
import HeaderContent from "./header-components/header-content";

const PageHeader = () => {
  return (
    <Container className="no-border">
      <Navbar />
      <HeaderContent />
    </Container>
  );
};

export default PageHeader;
