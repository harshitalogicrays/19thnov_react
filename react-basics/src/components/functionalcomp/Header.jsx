import React, { Fragment } from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { BsCart4 } from "react-icons/bs";
import { NavLink, Outlet } from 'react-router';
import ThemeBtn from './ThemeBtn';
const Header = () => {
  const navlinkstyles = ({isActive})=>({
    color:isActive ? "red" : "",
    backgroundColor:isActive ? "yellow" :"",
    borderRadius:"10px",
    fontWeight: isActive ? "bold" :"",
    transition : "all .5s ease"
  })
  let funlinks = [
    {text:"First Fun Comp" , url:"/fun/first"},
    {text:"props demo" , url:"/fun/props"},
    {text:"event demo" , url:"/fun/event"},
    {text:"useState" , url:"/fun/state"},
    {text:"list rendering" , url:"/fun/list"},
    {text:"form design" , url:"/fun/form"},
    {text:"validations" , url:"/fun/form/validations"},
    {text:"react hook form" , url:"/fun/form/rhf"},
    {text:"Lifting the stateup" , url:"/fun/stateup"},
    {text:"Hooks Demo" , url:"/fun/hooks"},

  ]
  return (
    <>   <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">react practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' style={navlinkstyles}>Home</Nav.Link>
             <Nav.Link as={NavLink} to='/about'  style={navlinkstyles}>About</Nav.Link>
             <Nav.Link as={NavLink} to='/products'  style={navlinkstyles}>Products</Nav.Link>
             <Nav.Link as={NavLink} to='/contact'  style={navlinkstyles}>Contact</Nav.Link>
             <NavDropdown title="Functional Components" id="basic-nav-dropdown1">
                {funlinks.map((link,index)=><Fragment key={index}>
                  <NavDropdown.Item  style={navlinkstyles} as={NavLink} to={link.url} end>
                     {link.text}
                  </NavDropdown.Item>
                  {funlinks.length-1 !=index &&  <NavDropdown.Divider /> }  
                </Fragment>)}
               
            </NavDropdown>
            <Nav.Link as={NavLink} to='/class'>Class Components</Nav.Link>

          </Nav>

          <ThemeBtn/>
          
          <Nav className="me-5">
          <Nav.Link as={NavLink} to='/register'  style={navlinkstyles}>Register</Nav.Link>
          <Nav.Link as={NavLink} to='/login'  style={navlinkstyles}>Login</Nav.Link>
          
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
    <Container fluid>
      <Outlet></Outlet>
    </Container>
    </>
  )
}

export default Header
