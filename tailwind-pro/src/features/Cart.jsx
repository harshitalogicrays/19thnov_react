import React, { useEffect } from 'react'
import { HiTrash } from 'react-icons/hi2';
import { Link } from 'react-router';
import { useCart } from '../CartContext';
export const Cart = () => {
  const {cartItems,total,increase,decrease,removeFromCart,emptyCart,calculateTotal} = useCart()
   useEffect(()=>{ calculateTotal()},[cartItems])
      return ( <div className="max-w-7xl mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cartItems.length==0 && <h1 className='text-2xl font-bold'>No Item in Cart</h1>}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-6 border-b border-gray-200">
                <div className="flex items-center gap-6">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">Price: ${Number(item.price).toFixed(2)}</p>
                    <div className=" mt-1">
                      <button type="button" className='border border-gray-300  p-2'
                       onClick={()=>decrease(item)}>-</button>
                      <input  type="number" value={item.qty} readOnly
                        className="w-14  p-2 border border-gray-300  text-center" />
                        <button type="button" className='border border-gray-300  p-2'
                        onClick={()=>increase(item)}>+</button>
                    </div>
                    <p className="text-gray-600">Total Price: ${Number(item.price*item.qty).toFixed(2)}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700" 
                onClick={()=>removeFromCart(item.id)}>
                  <HiTrash className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium text-gray-900">{(total < 200 && total !=0)? "$5.00" :"$0.00"}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-6">
              <span>Total</span>
              <span className="text-gray-900">{(total < 200 && total !=0)? <>${(total+5).toFixed()}</> :<>${total.toFixed()}</>}</span>
            </div>
            <div className="flex gap-2">
            <button className="mt-8 w-1/2 bg-red-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-200" 
            onClick={()=>emptyCart()}>
                Empty Cart
              </button>
              <button className={`mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200 ${cartItems.length==0 &&'opacity-55' }`}>
                Proceed to Checkout
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
