import React from 'react'
import { Col, Row ,Nav, NavLink, Container} from 'react-bootstrap'
import { Outlet } from 'react-router'
const HooksDemo = () => {
    const navlinkstyles =({isActive})=>({
        color:isActive ? "red" : "",
        backgroundColor:isActive ? "yellow" :"",
        fontWeight: isActive ? "bold" :"",
        transition : "all .5s ease"
      })
    let links = [
        {text:"usestate",url:"/fun/hooks"},
        {text:"useeffect",url:"/fun/hooks/useeffect"},
        {text:"usecallback",url:"/fun/hooks/usecallback"},
        {text:"useref",url:"/fun/hooks/useref"},
        {text:"usememo",url:"/fun/hooks/usememo"},
        {text:"usetransition",url:"/fun/hooks/usetransition"},
        {text:"useimperativehandle",url:"/fun/hooks/useimperativehandle"},
        {text:"usecontext",url:"/fun/hooks/usecontext"},
        {text:"customhook",url:"/fun/hooks/customhook"},
    ]
  return (
    <Row>
      <Col xs={3}>
        <Nav className="flex-column">
            {links.map((link ,index)=> <Nav.Link key={index} as={NavLink} 
            to={link.url} end>{link.text}</Nav.Link>)}   
    </Nav>
      </Col>
      <Col>
          <Container fluid className='mt-5'>
        <Outlet/>
        </Container>
      </Col>
    </Row>
  )
}

export default HooksDemo
