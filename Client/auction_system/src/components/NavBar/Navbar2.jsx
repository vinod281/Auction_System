import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar2.css'

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Online Auctions</Nav.Link>
            <Nav.Link href="#">Real Estate</Nav.Link>
            <Nav.Link href="#">Past Prices</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <NavDropdown title="Change Language" id="language-dropdown">
              <NavDropdown.Item href="#">English</NavDropdown.Item>
              <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#">French</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Register To Bid</Nav.Link>
            <Nav.Link href="#">Sell With Us</Nav.Link>
            <Nav.Link href="#" className="email-alerts">Email Alerts</Nav.Link>
            
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;