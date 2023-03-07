import React from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import Resume from '../assets/resume.pdf'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFilePdf } from 'react-icons/fa';


const github = 'https://github.com/omar-ahm';
const linkedin = 'https://www.linkedin.com/in/omar-ahm/';
const email = 'omar-ahm@outlook.com';
const phone = '+44 555 56 55 56';

function ContactPage() {
  return (
    <div className="contact-me">
        <h2 className="contact-title">Get In Touch</h2>
    <Form className="contact-form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <br />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <br />

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter message" />
      </Form.Group>

      <Button className="submit-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row>
    
        <Col>
        <div className='social-icons' d-flex justify-content-center>
          <a href={github}><FaGithub /> GitHub</a>{' '}
          <a href={linkedin}><FaLinkedin /> LinkedIn</a>{' '}
          <a href={`mailto:${email}`}><FaEnvelope /> Email</a>{' '}
          <a href={`tel:${phone}`}><FaPhone /> Phone</a>{' '}
          <a href={Resume}><FaFilePdf /> CV </a>{' '}
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactPage;
