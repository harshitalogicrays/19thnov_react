import React from 'react'
import { Button } from 'react-bootstrap'
import useToggle from './useToggle'

const CustomHookDemo = () => {
  let [toggle,handleToggle] = useToggle()
  return (
    <div>
      <Button type="button" variant="danger" className="me-2" onClick={()=>handleToggle(false)}>Hide Heading</Button>

      <Button type="button" variant="danger" className="me-2" onClick={()=>handleToggle(true)}>Show Heading</Button>

      <Button type="button" variant="danger" className="me-2" onClick={handleToggle}>Toggle Heading</Button>
      <br/>
      
      {toggle &&
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam eius corporis tempore ducimus ut fugit sequi labore quam veniam facilis, minus deleniti asperiores in soluta, veritatis illum sapiente! Dignissimos?</h1>
      }
    </div>
  )
}

export default CustomHookDemo
