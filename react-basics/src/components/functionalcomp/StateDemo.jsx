import React, { useState } from 'react'

const StateDemo = ({count=1}) => {
    // props.count = 3 //Cannot assign to read only property 'count' of object

    /* let c = props.count  //1
     let handleIncrease = ()=>{
         c = c+1
         console.log(c)
     } */

    let [c, setC] = React.useState(count)
    let [num1] = useState(1)
    let [isActive,setIsActive] =useState(true)
    let [products,setProducts]=useState([])
    let [user,setUser] = useState({username:"",email:"",password:""})
    let handleIncrease = () => {
        // setC(c+1) //c =c+1
        setC((prevC) => prevC + 1)
        // console.log(c)
    }
    let changeSign =()=>{
        // setC((prevC)=>-prevC)
        setC(-c) //1 => -1  => --1 => 1
    }
    return (
        <> <button type="button" className='btn btn-primary me-2' onClick={handleIncrease}>Increase</button>
            <button type="button" className='btn btn-primary me-2' onClick={() => setC(c - 1)}>
                Decrease</button>
            <button type="button" className='btn btn-primary me-2' onClick={() => setC(0)}>
                Reset</button>
            <button type="button" className='btn btn-primary me-2' onClick={changeSign}>
                Change Sign</button>
            <h1>Count: {c}</h1>
        </>
    )
}

export default StateDemo
