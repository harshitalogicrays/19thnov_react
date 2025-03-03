import React, { useEffect, useState } from 'react'
import CheckoutSummary from './CheckoutSummary'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { selectShipping, storeShippingAddress } from '../redux/checkoutSlice'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let obj = {name:'',mobile:'',address1:'',address2:'',city:'',state:'',country:'',pincode:''}
  const [shippingAddress,setShippingAddress] = useState({...obj})
  const handleCheckout = (e)=>{
    e.preventDefault()
    let {name,mobile,address1,city,pincode} =shippingAddress
        if(!name || !mobile || !address1 || !city || !pincode){
            toast.error("please fill all the fields")
        }
        else {
            dispatch(storeShippingAddress(shippingAddress))
            navigate('/checkoutpayment')
        }  
  }
  const checkoutAddress = useSelector(selectShipping)
  useEffect(()=>{
      if(checkoutAddress){setShippingAddress({...checkoutAddress})}
      else setShippingAddress({...obj})
  },[checkoutAddress])
  return (
    <div className='flex max-w-7xl gap-12 mt-8 mx-auto bg-white shadow-lg rounded-lg p-6'>
<div className='flex-1 border p-3'>
            <h1 className='text-center text-4xl mb-4'>Checkout Details</h1><hr/>
            <form className="space-y-4 mt-5" onSubmit={handleCheckout}>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text" name="name"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"  value={shippingAddress.name} onChange={(e)=>setShippingAddress({...shippingAddress ,  name:e.target.value})}
              />
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Mobile</label>
              <input
                type="text" name="mobile"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter mobile number"   value={shippingAddress.mobile} onChange={(e)=>setShippingAddress({...shippingAddress ,  mobile:e.target.value})}
              />
            </div>
          </div>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Address1</label>
              <input
                type="text" name="address1"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={shippingAddress.address1} onChange={(e)=>setShippingAddress({...shippingAddress ,  address1:e.target.value})}
              />
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Address2</label>
              <input
                type="text" name="address2"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={shippingAddress.address2} onChange={(e)=>setShippingAddress({...shippingAddress ,  address2:e.target.value})}
              />
            </div>
          </div>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">City</label>
              <input
                type="text" name="city"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={shippingAddress.city} onChange={(e)=>setShippingAddress({...shippingAddress ,  city:e.target.value})}
              />
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">State</label>
              <input
                type="text" name="state"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={shippingAddress.state} onChange={(e)=>setShippingAddress({...shippingAddress ,  state:e.target.value})}
              />
            </div>
          </div>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Country</label>
              <input
                type="text" name="country"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"   value={shippingAddress.country} onChange={(e)=>setShippingAddress({...shippingAddress ,  country:e.target.value})}
              />
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">pincode</label>
              <input
                type="number" name="pincode"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  value={shippingAddress.pincode} onChange={(e)=>setShippingAddress({...shippingAddress ,  pincode:e.target.value})}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            proceed to checkout
                     </button>
           </form>
        </div>
    <div className='flex-1'>
      <CheckoutSummary/>
    </div>
    </div>
  )
}

export default Checkout
