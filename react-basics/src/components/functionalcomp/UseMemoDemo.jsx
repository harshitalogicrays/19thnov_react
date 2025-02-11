import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
    const [count,setCount] = useState(1)
    const [show,setShow] =useState(false)
    const expensiveCal = (count)=>{
        console.log("expensive cal called")
        for(let i=1;i<=1000000000;i++){}
        return count
    }
    // const countval = expensiveCal(count)
    const countval =  useMemo(()=>{ return expensiveCal(count) },[count])
  return (
    <div>
      <button  type="button" class="btn btn-primary me-2" onClick={()=>setCount(count+1)} >
        Counter </button>
      <button  type="button" class="btn btn-primary"  onClick={()=>setShow(!show)}>
        {show ? "Show Block" : "Hide Block"}</button>
      <h1>{countval}</h1>
    </div>
  )
}

export default UseMemoDemo
