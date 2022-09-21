import React from "react";
import  { Container, Nav, Navbar }  from 'react-bootstrap';
// FIXME: without reload the page 
function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/items">items</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar>

    </>
  );
}

export default Header;