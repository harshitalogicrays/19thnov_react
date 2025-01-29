import React from 'react'
import Image1 from '../../assets/images/register.png'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookFormDemo = () => {
    const {register,handleSubmit,getValues,formState:{errors}} = useForm()
    let registerData=()=>{
        alert(JSON.stringify(getValues()))
    }
  return (
    <Container className='mt-5 shadow p-5'>
           <h1>React Hook Form</h1><hr/>
           <Row> <Col xs={4}>  <Image src={Image1} fluid/>  </Col>
               <Col>
                   <Form onSubmit={handleSubmit(registerData)}>
                       <Row>
                           <Col><Form.Group className="mb-3" >
                           <Form.Label>Username</Form.Label>
                           <Form.Control type='text' name="username" 
                           {...register('username', {required:"username is required"} )}
                           ></Form.Control>
                           {errors}
                           </Form.Group> </Col>
                           <Col> <Form.Group className="mb-3">
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="text" name="email"
                             {...register('email')}></Form.Control>
                       </Form.Group></Col>
                       </Row>                  
                       <Form.Group className="mb-3">
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" name="password"                           
                           {...register('password')}></Form.Control>
                       </Form.Group>
                       <Form.Group className="mb-3">
                           <Form.Label>Confirm Password</Form.Label>
                           <Form.Control type="password" name="cpassword"
                             {...register('cpassword')}></Form.Control>
                       </Form.Group>
                       <Button type="submit">Submit</Button>
                   </Form>
               </Col>
           </Row>
       </Container>
  )
}

export default ReactHookFormDemo
