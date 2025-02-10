import React from 'react'

const RefChildForward = (props,ref) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <input type="text" className='form-control' ref={ref}/>
    </div>
  )
}
export default React.forwardRef(RefChildForward)
