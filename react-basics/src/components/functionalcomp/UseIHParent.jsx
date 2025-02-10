import React, { useRef } from 'react'
import UseIHChild from './UseIHChild'

const UseIHParent = () => {
    const myRef=  useRef()
  return (
    <div>    
      <UseIHChild title="useImperativeHandle Demo" ref={myRef}/>

      <button type="button" className='btn btn-primary m-2' onClick={()=>myRef.current.clearValue()}>clear</button>

     <button type="button"className='btn btn-primary m-2'  onClick={()=>myRef.current.setValue("Harshita")}>set</button>

     <button type="button"className='btn btn-primary m-2'  onClick={()=>alert(myRef.current.getValue())}>get</button>
    </div>
  )
}

export default UseIHParent
