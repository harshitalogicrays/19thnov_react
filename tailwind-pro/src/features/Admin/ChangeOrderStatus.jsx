import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router'

const ChangeOrderStatus = ({order}) => {
  const navigate =  useNavigate()
  const [ostatus,setOStatus] = useState(order.status)
  const updateStatus = async()=>{
    try{
      await axios.put(`https://67ce5dd3125cd5af757a41a2.mockapi.io/orders/${order.id}` , {...order ,  status: ostatus, editedAt:new Date()})
      toast.success("order status updated")
      navigate('/admin/view/orders')
    }
    catch(err){toast.error(err.message)}
  }
  return (
    <div className='border p-2 w-xl rounded-lg border-blue-100'>
      <h1 className="text-xl font-bold mb-4">Update Order Delivery Status :</h1>
      <select className='w-2xs border p-2 rounded-lg' 
      value={ostatus} onChange={(e)=>setOStatus(e.target.value)}>     
        <option>processing</option>
        <option>placed</option>
        <option>shipped</option>
        <option>out for delivery</option>
        <option>delivered</option>
        <option>cancelled</option>
      </select>
      <button type="button" onClick={updateStatus} className='ms-5 border bg-indigo-400 rounded-lg p-2 text-white w-25'>Update</button>
    </div>
  )
}

export default ChangeOrderStatus
