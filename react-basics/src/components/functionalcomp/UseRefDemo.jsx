import React, { useEffect, useRef } from 'react'

const UseRefDemo = () => {
    let myRef =  useRef()
    let countRef = useRef()
    useEffect(()=>{
        // myRef.current.focus()
    },[])
  return (
    <div className='col-6 mt-5'>
      <h1>useRef demo</h1>
      <div className="input-group">
        <input type="text" className="form-control" ref={myRef} defaultValue="Ram"/>
        <button className='btn btn-warning' 
        onClick={ ()=>myRef.current.focus()  }>focus</button>
         <button className='btn btn-primary' 
        onClick={ ()=>alert(myRef.current.value)  }>fetch value</button>
      </div>
    <hr/>
        <div className="col-3">
        <div className="input-group">
        <button className='btn btn-primary' onClick={ ()=>countRef.current.value-- } >-</button>
        <input type="text" className='form-control text-center' defaultValue={1} ref={countRef}/>
        <button className='btn btn-primary' onClick={ ()=>countRef.current.value++ }>+</button>
        </div></div>
    </div>
  )
}

export default UseRefDemo
