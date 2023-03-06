import React from "react";
import { Form, Button } from 'react-bootstrap';

function ContactPage() {
  return (
    <div className="contact-me">
        <h2 className="contact-title">Get In Touch</h2>
    <Form className="contact-form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter message" />
      </Form.Group>

      <Button className="submit-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default ContactPage;
