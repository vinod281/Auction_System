import React from 'react';
import './Footer.css';  // Keep the CSS file for additional styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Removed faUserFriends as it was not used

import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Section 1: Company Info */}
          <Col md={3} sm={6} className="mb-3 mb-md-0">
            <h4>About Us</h4>
            <p>We provide amazing solutions to modern web problems.</p>
          </Col>

          {/* Section 2: Navigation Links */}
          <Col md={3} sm={6} className="mb-3 mb-md-0">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>

          {/* Section 3: Social Media Links */}
          <Col md={3} sm={6} className="mb-3 mb-md-0">
            <h4>Follow Us</h4>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </Col>

          {/* Section 4: Contact Info */}
          <Col md={3} sm={6}>
            <h4>Contact Us</h4>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@moe.gov.lk" className="no-underline"> info@moe.gov.lk</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone: +123 456 7890
            </p>
          </Col>
        </Row>

        {/* Copyright Section */}
        <div className="footer-bottom text-center mt-4">
          <p>© 2024 My Website. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

