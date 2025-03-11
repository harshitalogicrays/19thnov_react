import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useCart } from '../CartContext'
import { useSelector } from 'react-redux'
import { selectShipping } from '../redux/checkoutSlice'

const StripePayment = ({clientSecret}) => {
    const [isLoading, setIsLoading] = useState(false)
    const stripe = useStripe()
    const elements =  useElements()
    const navigate =  useNavigate()
    const {emptyCart} = useCart()
    const {cartItems,total} = useCart()
    const {username,email,id} =  JSON.parse(sessionStorage.getItem("19thnov"))
    const shippingAddress =  useSelector(selectShipping)
    const handlePayment = ()=>{
        setIsLoading(true)
        if(!stripe || !elements){toast.error("stripe is not initialized");return}
        try{
            let cardElement = elements.getElement(CardElement)
            stripe.confirmCardPayment(clientSecret , {
                payment_method:{card:cardElement}
            }).then(async(result)=>{
                if(result.paymentIntent){
                    if(result.paymentIntent.status=="succeeded"){
                        toast.success("payment done")
                        let orderobj = {cartItems ,  total,  username,  email ,  userId:id , shippingAddress ,  paymentMethod:"online" ,
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
                }
                else if(result.error){console.log(result.error.message)}
                setIsLoading(false)
            }).catch(err=>{toast.error(err.message);setIsLoading(false)})
        }
        catch(err){toast.error(err.message); setIsLoading(false)}
    }

        return (
            <>
              <CardElement className='border-1 py-2 px-2 mb-4 rounded-lg h-10'/>
              <div className="flex mt-6 space-x-4">
                  <button className="bg-blue-600 flex-2 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                 onClick={handlePayment} disabled={!stripe}>
                    {isLoading ? <div class="animate-spin w-10 h-10 mx-auto border-4 border-t-transparent border-white rounded-full " ></div> : <>  (pay now) </>}
          
                  </button>
                  <button className="bg-red-500 flex-1 text-white py-2 px-6 rounded-md hover:bg-red-600">
                    Cancel
                  </button>
                </div>
            </>
            )
}

export default StripePayment
