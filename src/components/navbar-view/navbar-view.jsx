import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
  let user = localStorage.getItem("user");

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand as={Link} to={"/"}>
        MovieShare
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {isAuth() && (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to={`/users/${user}`}>Profile</Nav.Link>
            <Nav.Link
              onClick={() => {
                onLoggedOut();
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}