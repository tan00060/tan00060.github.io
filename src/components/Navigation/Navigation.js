import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
              <Link to="/projects">Project</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
