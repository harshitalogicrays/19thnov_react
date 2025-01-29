import React from 'react'
import Image1 from '../../assets/images/register.png'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
const ReactBootstrapForm = () => {
  return (
    <Container className='mt-5 shadow p-5'>
        <h1>Form using React-Bootstrap</h1><hr/>
        <Row>
            <Col xs={4}>
                <Image src={Image1} fluid/>
            </Col>
            <Col>
                <Form>
                    <Row>
                        <Col><Form.Group className="mb-3" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' name="username"></Form.Control>
                        </Form.Group> </Col>
                        <Col> <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email"></Form.Control>
                    </Form.Group></Col>
                    </Row>                  
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword"></Form.Control>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default ReactBootstrapForm
