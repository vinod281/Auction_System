import React from 'react';
import { Accordion, Container, Form, Button, Col, Row } from 'react-bootstrap';
import './contactus.css';
import Table from 'react-bootstrap/Table';

function Contactus() {
  return (
    <Container>
      <div className="row">
          <div className="block">
         <Table striped bordered  variant="light" className="blue-light">
          <thread >
            <tr>
              <th className="large-text"> Auctions International Online</th>
            </tr>
          </thread>
          <tbody>
        <tr>
          <td><b>Thanks for getting in touch with us.</b><br/>
          We are happy to assist</td>
          </tr>
         </tbody>
        
         </Table>
         <Table striped bordered  variant="light" >
          <thread>
            <tr >
              <th className="large-text">  Our Services
              </th>
            </tr>
          </thread>
          <tbody>
        <tr>
          <td>Auctions International specializes
             in selling government and municipal
              surplus by online auction. Speak 
              with one of our experienced auction
               specialists today to find out how
                our services can strengthen your
                 bottom line.</td>
          </tr>
         </tbody>
        
         </Table>

          </div>

        <Col md={6}>
        <h2 className="h2title" style={{ fontSize: '19px' }} >Contact Auctions International</h2>
          <div className="block1">
            
            <div className="email-header">
              <span role="img" aria-label="mail">📧</span> Send Us An Email
            </div>
            <p>To send us a message, please fill out the form below and press the submit button.</p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name : </Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address : </Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formCompany">
                <Form.Label>Company : </Form.Label>
                <Form.Control type="text" placeholder="Enter company name" />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject : </Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message : </Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Write your message" />
              </Form.Group>

              <div className="captcha">
                <div className="g-recaptcha" data-sitekey="your-site-key"></div>
              </div>
              <div className='button'>
              <Button variant="danger" type="submit">
                Send Message
              </Button>
              </div>
            </Form>
          </div>
        </Col>

        <Col md={4}>
                    <p style={{ fontSize: '12px' }} ><b>Mailing Address</b><br />
            11167 Big Tree Rd<br />
            East Aurora, NY 14052<br /><br />

            <b>Telephone & Fax</b><br />
            Phone: 800-536-1401<br />
            Fax: 800-569-3334<br /><br />

            <b>General Email info@auctionsinternational.com</b></p>
          <div className="block" style={{ width: '100%', height: '400px' }}>
          <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9851.892816415462!2d-78.56890373751304!3d42.767517036260934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30bae2ff13ee9%3A0x501028a2d32cea12!2sAuctions%20International!5e0!3m2!1sen!2sus!4v1726545509842!5m2!1sen!2sus"
           referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          style={{ border: 0 }} 
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default Contactus;
