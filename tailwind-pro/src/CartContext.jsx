import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
const cartcon = createContext()

const CartContext = ({children}) => {
    const [cartItems,setCartItems] =useState([])
    const [total,setTotal] = useState(0)
    return (
    <cartcon.Provider value={{cartItems,total}}>
      {children}
    </cartcon.Provider>
  )
}

export default CartContext

export const useCart = ()=>useContext(cartcon)
