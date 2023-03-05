import React from "react";
import { Navbar, Nav  } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Bio</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
