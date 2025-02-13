import React, { useState } from 'react'

const useToggle = () => {
    const [toggle,setToggle] =useState(true)
    
    const handleToggle = (val)=>{
        if(typeof(val) !="Boolean"){
            setToggle(!toggle)
        }
        else setToggle(val)
    }
  return (
    [toggle,handleToggle]
  )
}

export default useToggle
