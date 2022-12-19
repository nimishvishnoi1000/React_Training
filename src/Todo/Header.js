import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cardsusingarray from './Cardsusingarray_1';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="Home">To Do</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
          <Nav.Link href="Login">Login</Nav.Link>
          <Nav.Link href="ShowHide">ShowHide</Nav.Link>
          <Nav.Link href="Products">Products</Nav.Link>
          <Nav.Link href="Cardsusingarray_1">Products_arr</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header