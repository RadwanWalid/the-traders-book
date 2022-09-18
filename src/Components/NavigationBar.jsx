import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../Assets/CSS/Component Style/NavigationBar.css";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGear);

function NavigationBar() {

  return (
    <Navbar className="navigation" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/"><img id="brand-logo" src={require("../Assets/Images/Trader's Book Brand.png")} alt="" /></Navbar.Brand>
        <Nav className="ms-auto">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <FontAwesomeIcon icon="fa-gear" />
        </Nav>
        <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
          <Nav>
            <Nav.Link className="nav-link" href="/AboutUs">About Us</Nav.Link>
            <Nav.Link className="nav-link" href="/ContactUs">Contact Us</Nav.Link>
            <Nav.Link className="nav-link" href="/Feedback">Feedback</Nav.Link>
            <Nav.Link className="nav-link" href="/Register">Sign Up/Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavigationBar;