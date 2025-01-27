import React, { useState } from 'react'
import Image1 from '../../assets/images/register.png'
const Addition = () => {
  let [num1,setNum1] = useState(0)
  let [num2,setNum2] = useState(0)
  let [result,setResult] = useState('')
  let handleAdd = ()=> setResult(parseInt(num1)+parseInt(num2)) //result = num1+num2
  let changeNum1 = (e)=>{
    // console.log(e.target) // event info of change event and info of element
    setNum1(e.target.value) //"21"
  }
  let imgstyles = {
    border:"2px solid blue",
    borderRadius:"10px"
  }
  return (
    <div className='container mt-5 col-6'>
        <h1 style={{color:"purple" , backgroundColor : "gray"}}>Addition</h1><hr/>
        <div className="row">
            <div className="col"> 
              <img src={Image1} className='img-fluid' style={imgstyles}/>
              </div>
            <div className="col">
            <div class="mb-3">
            <label for="num1" class="form-label">Number1</label>
            <input  type="text"  name="num1" class="form-control" value={num1} onChange={changeNum1}/>
            </div>
            <div class="mb-3">
                <label for="num2" class="form-label">Number2</label>
                <input  type="text"  name="num2" class="form-control"  value={num2} onChange={(e)=>setNum2(e.target.value)}/>
            </div>
            <button type="button" className='btn btn-primary' onClick={handleAdd}>Add</button>
            <h1>Result: {result} </h1>
            </div>
        </div>
       
    </div>
  )
}

export default Addition
