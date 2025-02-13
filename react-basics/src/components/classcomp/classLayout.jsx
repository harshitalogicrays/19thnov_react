import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class ClassLayout extends Component {
    links = [
        {text:"First class Comp" , url:"/class"},
        {text:"props demo" , url:"/class/props"},
        {text:"event and state demo" , url:"/class/eventstate"},
        {text:"validations" , url:"/class/form/validations"},
        {text:"ref" , url:"/class/ref"},
        {text:"life cycle" , url:"/class/lifecycle"},
        {text:"pure comp" , url:"/class/pure"},
      ]
      navlinkstyles = ({isActive})=>({
        color:isActive ? "red" : "",
        backgroundColor:isActive ? "yellow" :"",
        fontWeight: isActive ? "bold" :"",
      })
  render() {
    return (
        <>
        <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={NavLink} to='/'>Back to Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {this.links.map((link,index)=> <Nav.Link key={index} as={NavLink} to={link.url} end style={this.navlinkstyles}> {link.text} </Nav.Link>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Container>  <Outlet/> </Container>
      </>
    )
  }
}
