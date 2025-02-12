import React from 'react'
import { Button } from 'react-bootstrap'
import { mycon1 } from './MyFirstContextComp'

const UseContextDemo = () => {
      const contextdata = mycon1()
      console.log(contextdata)
  return (
    <div>
          <Button 
    onClick={()=>contextdata.changeName("LRA")}>
      Change Username</Button>
    {contextdata.username}
    </div>
  )
}

export default UseContextDemo
