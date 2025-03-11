import React, { useEffect, useState } from 'react'
import CheckoutSummary from './CheckoutSummary'
import { useDispatch, useSelector } from 'react-redux'
import { useCart } from '../CartContext'
import { selectShipping } from '../redux/checkoutSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripePayment from './StripePayment'

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);

const CheckoutPayment = () => {
  const  [paymentMethod,setPaymentMethod] = useState('')
  const [clientsecret, setClientSecret] = useState('')
  const navigate =  useNavigate()
  const {emptyCart} = useCart()
  const {cartItems,total} = useCart()
  const {username,email,id} =  JSON.parse(sessionStorage.getItem("19thnov"))
  const shippingAddress =  useSelector(selectShipping)
  const handleCodOrder = async()=>{
    let orderobj = {cartItems ,  total,  username,  email ,  userId:id , shippingAddress ,  paymentMethod:"cod" ,
      status:"placed" , orderDate:new Date().toLocaleDateString() , orderTime:new Date().toLocaleTimeString() }
      try{
        await axios.post("https://67ce5dd3125cd5af757a41a2.mockapi.io/orders" , orderobj)
        toast.success("order placed")
        emptyCart()
        navigate('/thankyou')
      }
      catch(err){
        toast.error(err.message)
      }
  }

  const payonline = async()=>{
    try{
      const res = await axios.post("http://localhost:1000/create-payment-intent",{amount:total})
      setClientSecret(res.data.clientSecret)
    }
    catch(err){toast.error(err.message)}
  }
  useEffect(()=>{
    if(paymentMethod=="online") 
        payonline()
  },[paymentMethod])

  if(cartItems.length !=0){
    return (
      <Elements stripe={stripePromise}>
        <div className='flex max-w-7xl gap-12 mt-32 mx-auto bg-white shadow-lg rounded-lg p-6 '>
        <div className='flex-1 border p-3'>
            <h1 className='text-center text-4xl mb-4'>Checkout Payment</h1><hr/>
            <h2 className="text-xl font-semibold mt-4">Payment Method</h2>
            <div className="mt-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod" 
                  className="w-5 h-5 text-blue-500" onClick={()=>setPaymentMethod("cod")}
                />
                <label className="text-lg">Cash on Delivery</label>
              </div>
              {paymentMethod=="cod" &&
          <div className="flex mt-6 space-x-4">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 cursor-pointer" 
              onClick={handleCodOrder}
            >
                Place Order
              </button>
              <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600">
                Cancel
              </button>
            </div>}
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="radio"
                  name="payment"  onClick={()=>setPaymentMethod("online")}
                  value="online"
                  className="w-5 h-5 text-blue-500" 
                />
                <label className="text-lg">Pay Online</label>
              </div>
            </div>
            {(paymentMethod=="online" && clientsecret) &&
              <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-semibold mb-2">Enter Payment Details</h3>
                <StripePayment clientSecret={clientsecret}/>
              </div>       
            }
        </div>
        <div className='flex-1'>
            <CheckoutSummary/>
        </div>
      </div>
     </Elements>
    )
  }
  else {return <Navigate to='/' replace></Navigate>}

}

export default CheckoutPayment
