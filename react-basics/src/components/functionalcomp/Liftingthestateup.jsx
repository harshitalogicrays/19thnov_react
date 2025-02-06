import React, { useState } from 'react'
import Liftingthestateupchild from './Liftingthestateupchild'

const Liftingthestateup = () => {
    const [count,setCount] =useState(0)

    const handleCount = (val)=>{
        switch(val){
            case '+':setCount(count+1);break
            case '-':setCount(count-1);break
            case 'reset':setCount(0);break
            case 'change':setCount(-count);break
        }
    }
  return (
    <div className='mt-5'>
      <Liftingthestateupchild handleCount={handleCount}/>

      <h1>Count: {count}</h1>
    </div>
  )
}

export default Liftingthestateup
