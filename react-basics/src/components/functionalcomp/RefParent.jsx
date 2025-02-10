import React, { useRef } from 'react'
import RefChildComp from './RefChildComp'
import RefChildForward from './RefChildForward'

const RefParent = () => {
    const countRef = useRef()
    const myRef = useRef()
  return (
    <div>
        <RefChildComp inner = {countRef}/>
        <input type="text" className='form-control text-center' defaultValue={1} ref={countRef}/>

        <hr/>
        
        <RefChildForward title="forwarding ref demo" ref={myRef}/>
        <button className='btn btn-primary mt-2'  onClick={ ()=>myRef.current.focus() }>focus to forwared ref</button>
    </div>
  )
}

export default RefParent
