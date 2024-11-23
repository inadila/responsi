import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/App.css";
import logo from "./images/logo_kanan_atas-removebg-preview.png";

import About from './about';
import Organizational from './organizational'; 
import Creation from "./creation";
import Work from "./work";
import Contact from "./contact";
import Rousel from "./rousel";

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar className="navbar-custom">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={logo} 
              alt="Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#portfolio">Portofolio</Nav.Link>
              <Nav.Link href="#contact">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{/* ============================= */}

      <Rousel /> 

      {/* About Me Section */}
      <h1 className="about">About Me</h1>
      <About />

      {/* Education Section */}
      <h1 className="organ">Organizational Experience</h1>
      <Organizational /> 

      {/* Creation Section */}
      <h1 className="creation">Creation of Work</h1>
      <Creation /> 

      {/* Work experience Section */}
      <h1 className="work">Work Experience</h1>
      <Work /> 

      {/* Contact Section */}
      <h1 className="contact">Contacts</h1>
      <Contact /> 

      
    </div>
  );
};

export default App;
