import React from 'react';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark py-3">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">© 2023 Omar-Ahm. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://www.linkedin.com/in/omar-ahm/"><FaLinkedin className="me-3" /></a>
            <a href="https://github.com/omar-ahm"><FaGithub className="me-3" /></a>
            <a href="https://www.instagram.com"><FaMailBulk /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer