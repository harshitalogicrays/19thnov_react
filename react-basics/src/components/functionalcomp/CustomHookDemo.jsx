import React from 'react'
import { Button } from 'react-bootstrap'

const CustomHookDemo = () => {
  return (
    <div>
      <Button type="button" variant="danger" className="me-2">Hide Heading</Button>
      <Button type="button" variant="danger" className="me-2">Show Heading</Button>
      <Button type="button" variant="danger" className="me-2">Toggle Heading</Button>
      <br/>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam eius corporis tempore ducimus ut fugit sequi labore quam veniam facilis, minus deleniti asperiores in soluta, veritatis illum sapiente! Dignissimos?</h1>
    </div>
  )
}

export default CustomHookDemo
