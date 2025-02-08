import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [count,setCount] =useState(0)
    useEffect(()=>{
    const timer =  setInterval(()=>{
            console.log("setinterval called")
            setCount(prevCount=>prevCount+1)
        },2000)
      
    return ()=>{ 
        console.log("clearinterval called")
        clearInterval(timer)
    }
    },[])
  return (
    <div>
      <h1>useEffect Demo</h1>  
      <h1>{count}</h1>
  </div>
  )
}

export default UseEffectDemo
