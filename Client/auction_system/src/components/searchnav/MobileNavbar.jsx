import React, { useEffect } from 'react';
import { Navbar, Nav, Button, Dropdown, DropdownButton, FormControl, Form } from 'react-bootstrap';
import './MobileNavbar.css'; // Import the CSS file

const MobileNavbar = () => {
  useEffect(() => {
    // Load Google Translate Script
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate Element
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    addGoogleTranslateScript();
  }, []);

  const waitForGoogleTranslate = (callback) => {
    const intervalId = setInterval(() => {
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        clearInterval(intervalId);
        callback(selectElement);
      }
    }, 100);
  };

  const handleSelect = (languageCode) => {
    waitForGoogleTranslate((selectElement) => {
      selectElement.value = languageCode;
      selectElement.dispatchEvent(new Event('change'));
    });
  };

  return (
    <Navbar bg="light" expand="md" collapseOnSelect className="custom-navbar">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#online-auctions">Online Auctions</Nav.Link>
          <Nav.Link href="#real-estate">Real Estate</Nav.Link>
          <Nav.Link href="#past-prices">Past Prices</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
        </Nav>

        <div id="google_translate_element" style={{ display: 'none' }}></div>

        <div className="language-switcher">
          <DropdownButton id="dropdown-basic-button" title="Select Language" className="language-dropdown">
            <Dropdown.Item onClick={() => handleSelect('en')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('es')}>Spanish</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('fr')}>French</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('de')}>German</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSelect('si')}>Sinhala</Dropdown.Item>
          </DropdownButton>
        </div>

        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#register">Register To Bid</Nav.Link>
          <Nav.Link href="#sell">Sell With Us</Nav.Link>
          <Button variant="danger" href="#email-alerts" className="email-alert-btn">Email Alerts</Button>
        </Nav>

        {/* Search form only for mobile */}
        <Form inline className="ml-auto d-block d-md-none mobile-search-form">
          <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
          <Button variant="outline-success" className="search-btn">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileNavbar;
