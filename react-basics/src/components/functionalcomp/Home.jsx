import React, { useContext } from 'react'
import ListRendering from './ListRendering'
import { con1, mycon1 } from './MyFirstContextComp'
import { Button } from 'react-bootstrap'

const Home = () => {
  // const contextdata = useContext(con1)
  const contextdata = mycon1()
  console.log(contextdata)
  return (
   <>
    <h1>Home Page</h1>
    {/* <ListRendering/> */}

   </>
  )
}

export default Home
