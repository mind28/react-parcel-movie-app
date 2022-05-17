import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

//import statement to indicate that you need to bundle `./index.scss`
import './index.scss';



// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>

                <Navbar expand="md">
      <Container>
    <Navbar.Brand href="#home">My-Flix</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="My Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Info</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Privacy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Favorite movies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Terms and Conditions</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <MainView />

      </Container>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);