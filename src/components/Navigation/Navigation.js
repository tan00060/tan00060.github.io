import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Michael Tan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navBarRight">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item></Nav.Item>
            <Nav.Link href="/projects">Project</Nav.Link>

            <Nav.Item></Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>

            <Nav.Item>
              <Nav.Link eventKey={2} href="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
