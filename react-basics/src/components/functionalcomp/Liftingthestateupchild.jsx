import React from 'react'

const Liftingthestateupchild = ({handleCount}) => {
  return (
   <>
    <button type="button" className='btn btn-primary me-2'  onClick={()=>handleCount('+')}>Increase</button>

    <button type="button" className='btn btn-primary me-2'  onClick={()=>handleCount('-')}> Decrease</button>

     <button type="button" className='btn btn-primary me-2'  onClick={()=>handleCount('reset')}> Reset</button>
    
    <button type="button" className='btn btn-primary me-2'  onClick={()=>handleCount('change')}> Change Sign</button>
   </>
  )
}

export default Liftingthestateupchild
