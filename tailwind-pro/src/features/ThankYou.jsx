import React from 'react'
import { Link } from 'react-router'

const ThankYou = () => {
    let cssvar ={
        fontSize: "50px",
        position: "fixed",
        top:"50%",
        left:"50%",
        transform: 'translate(-50%,-50%)'
    }
  return (
    <div>
        <h1 style={cssvar}>Thank you for your order<br/>
        <Link to='/' 
            type="button"
            class="border-1 bg-blue-400 text-white p-4 rounded-2xl" 
        >
            Continue Shopping 
        </Link>
        </h1>
    </div>
  )
}

export default ThankYou
