import React from 'react'
import Image1 from '../../assets/images/register.png'
const Addition = () => {
  return (
    <div className='container mt-5 col-6'>
        <h1>Addition</h1><hr/>
        <div className="row">
            <div className="col">
                <img src={Image1} className='img-fluid'/>
            </div>
            <div className="col">
            <div class="mb-3">
            <label for="num1" class="form-label">Number1</label>
            <input  type="text"  name="num1" class="form-control"   />
            </div>
            <div class="mb-3">
                <label for="num2" class="form-label">Number2</label>
                <input  type="text"  name="num2" class="form-control"   />
            </div>
            <button type="button" className='btn btn-primary'>Add</button>
            <h1>Result: </h1>
            </div>
        </div>
       
    </div>
  )
}

export default Addition
