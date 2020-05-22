import React from 'react'
import logo from './ExyteLogo.png'
import { Container } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
        <ul id="horizontal-menu">
          <li><a href="./">Home</a></li>
          <li><a href="./">Services</a></li>
          <li><a href="./">Portfolio</a></li>
          <li><a href="./">Team</a></li>
          <li><a href="./">Blog</a></li>
          <li><a href="./">Contacts</a></li>
        </ul>
      </header>
    </Container>
  )
}

export default App;
