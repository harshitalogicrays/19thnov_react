import React from 'react'

const Eventsdemoinfun = () => {
    let handleClick = () => { 
        let a = 1
        let b= 3
        alert(`button clicked ${a+b}`)   
    }
    let handleClick1=(a,b)=>{  alert(a+b) }
    return (
        <>
            <h1>Events</h1>
            <button type="button" className='btn btn-primary me-2'
                onClick={() => alert("button clicked")} >display alert</button>

            <button type="button" className='btn btn-primary me-2'
                onClick={handleClick} >click me</button>

            <button type="button" className='btn btn-primary me-2'
                onClick={() => handleClick()} >click me</button>

            <button type="button" className='btn btn-primary me-2'
                onClick={() => handleClick1(2, 3)}>click me</button>
        </>
    )
}

export default Eventsdemoinfun
