import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { BsCart4 } from "react-icons/bs";
import { NavLink } from 'react-router';
const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">react practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
             <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
             <Nav.Link as={NavLink} to='/products'>Products</Nav.Link>
             <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
          </Nav>
          <Nav className="me-5">
          <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
          <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
          
          <Nav.Link href="#link"><BsCart4 size={30}/></Nav.Link>
          <span class="badge rounded-pill text-bg-danger" 
          style={{height:'20px',position:'relative',right:'12px'}}>0</span >
            <NavDropdown title="Welcome Guest" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Divider /> 
                <NavDropdown.Item href="#action/3.2">My Cart</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout </NavDropdown.Item>
                </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
