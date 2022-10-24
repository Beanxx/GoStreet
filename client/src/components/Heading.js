import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Heading = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/upload"
                style={{ color: "white", textDecoration: "none" }}
              >
                Upload
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/list"
                style={{ color: "white", textDecoration: "none" }}
              >
                List
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
