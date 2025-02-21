import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify'

const cartcon = createContext()
const CartContext = ({children}) => {
    const [cartItems,setCartItems] =useState([])
    const [total,setTotal] = useState(0)
    const ADD_TO_CART=(product)=>{ 
      // console.log(product)
      const itemIndex = cartItems.findIndex((item)=>item.id==product.id) //index otherwise -1
      if(itemIndex==-1){
        setCartItems([...cartItems,{...product,qty:1}])}
      else {
        toast.info(`${product.title} already added to cart`)} }
        
    const increase=(product)=>{
      const itemIndex = cartItems.findIndex((item)=>item.id==product.id)
      cartItems[itemIndex].qty++
      setCartItems([...cartItems])  }

    const decrease=(product)=>{
      const itemIndex = cartItems.findIndex((item)=>item.id==product.id)
      if( cartItems[itemIndex].qty > 1) cartItems[itemIndex].qty--
      else  cartItems[itemIndex].qty = 1
      setCartItems([...cartItems])
    }

    const removeFromCart=(id)=>{
      const filter = cartItems.filter((item)=>item.id!=id)
      setCartItems([...filter])

      // const itemIndex = cartItems.findIndex((item)=>item.id==id)
      // cartItems.splice(itemIndex,1)
      // setCartItems([...cartItems])
    }
    const emptyCart =()=>{ setCartItems([]) ;setTotal(0)}
    const calculateTotal = ()=>{
     const t = cartItems.reduce((prev,curr)=>{return (prev+(curr.price*curr.qty))},0)
     setTotal(t)
    }
    return (
    <cartcon.Provider value={{cartItems,total,ADD_TO_CART,increase,decrease,removeFromCart,emptyCart,calculateTotal}}>
      {children}
    </cartcon.Provider>
  )
}

export default CartContext

export const useCart = ()=>useContext(cartcon)
