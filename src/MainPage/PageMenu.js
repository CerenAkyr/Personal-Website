import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";


function PageMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Ceren Akyar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/home"}>Home</Nav.Link>
          <Nav.Link as={NavLink} to={"/projects"}>Experiences & Projects</Nav.Link>
          <Nav.Link as={NavLink} to={"/courses"}>Courses Taken</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PageMenu;