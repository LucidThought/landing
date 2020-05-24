import React from "react";
import { Container } from "react-bootstrap";

import "./navbar.scss";

const Navbar = () => {
  return (
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
        <a href="http://www.instagram.com" id="social-icon">
          <img src="/header/instagram.png" alt="Instagram" />
        </a>
        <a href="http://www.twitter.com" id="social-icon">
          <img src="/header/twitter.png" alt="Twitter" />
        </a>
        <a href="http://www.github.com" id="social-icon">
          <img src="/header/github.png" alt="GitHub" />
        </a>
      </Container>
    </header>
  );
};

export default Navbar;
