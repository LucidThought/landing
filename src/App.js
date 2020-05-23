import React from 'react'
import logo from './assets/ExyteLogo.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import github from './assets/github.png'
import { Container } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" id="logo"/>
        <ul id="horizontal-menu">
          <li><a href="./">Home</a></li>
          <li><a href="./">Services</a></li>
          <li><a href="./">Portfolio</a></li>
          <li><a href="./">Team</a></li>
          <li><a href="./">Blog</a></li>
          <li><a href="./">Contacts </a></li>
        </ul>
        <Container className="social-icons">
          <a href="www.instagram.com" id="social-icon"><img src={instagram} alt="Instagram"/></a>
          <a href="www.twitter.com" id="social-icon"><img src={twitter} alt="Twitter"/></a>
          <a href="www.github.com" id="social-icon"><img src={github} alt="GitHub"/></a>
        </Container>
      </header>
    </Container>
  )
}

export default App;
