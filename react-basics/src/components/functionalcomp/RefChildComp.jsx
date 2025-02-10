import React from 'react'

const RefChildComp = (props) => {
  return (
    <div className='mb-3'>
       <button className='btn btn-primary me-2'  onClick={ ()=>props.inner.current.value-- }>-</button>
       
        <button className='btn btn-primary'   onClick={ ()=>props.inner.current.value++ }>+</button>
        
    </div>
  )
}

export default RefChildComp
