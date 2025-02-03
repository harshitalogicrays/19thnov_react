import React from 'react'
import Image1 from '../../assets/images/register.png'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookFormDemo = () => {
    const { register, handleSubmit, getValues, formState: { errors }, trigger } = useForm()
    let registerData = () => { alert(JSON.stringify(getValues())) }
    return (<Container className='mt-5 shadow p-5'>    <h1>React Hook Form</h1><hr />   <Row> <Col xs={4}>  <Image src={Image1} fluid />  </Col>  <Col>  <Form onSubmit={handleSubmit(registerData)}>
        <Row><Col><Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' name="username"
                {...register('username', {
                    required: "username is required",
                    minLength: { value: 5, message: "min 5 char" }, maxLength: { value: 50, message: "max 50 chars" }
                })}
                onBlur={() => trigger('username')}></Form.Control>
            {errors.username && <span className='text-danger'> {errors.username.message}</span>}  </Form.Group> </Col>
            <Col> <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email"
                    {...register('email', {
                        required: "Email is required",
                        pattern: { value: /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/, message: "invalid email" }
                    })}
                    onBlur={() => trigger('email')}></Form.Control>
                {errors.email && <span className='text-danger'>  {errors.email.message}</span>} </Form.Group></Col> </Row>
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password"
                {...register('password', { required: "password is required" })} onBlur={() => trigger('password')}></Form.Control>
            {errors.password && <span className='text-danger'> {errors.password.message}</span>} </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="cpassword"
                {...register('cpassword', {
                    required: true,
                    validate(cpwd) {
                        let { password } = getValues()
                        return password == cpwd || "password not match"
                    }
                })}></Form.Control>
            {errors.cpassword && <span className='text-danger'> {errors.cpassword.message}</span>}</Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    </Col>
    </Row>
    </Container>
    )
}

export default ReactHookFormDemo
