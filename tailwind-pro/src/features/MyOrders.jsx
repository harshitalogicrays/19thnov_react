import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchorders, selectorders } from '../redux/orderSlice'
import { Link } from 'react-router'

const MyOrders = () => {
       const dispatch = useDispatch()

       useEffect(()=>{
           dispatch(fetchorders())
       },[])
   
       const allorders = useSelector(selectorders)
       const {username} =  JSON.parse(sessionStorage.getItem("19thnov"))
       const orders =  allorders.filter(order => order.username == username)

    
  return (
      <div className="max-w-7xl mx-auto mt-4 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">My Orders</h2>
        <div className="overflow-x-auto mb-3">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                  Order Id
                </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                  Order Date and Time
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                  Payment Amount
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                  Payment Mode
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                  Delivery Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length==0 &&   <tr>  <td colSpan="7"
                    className="px-6 py-4 text-center text-sm text-gray-500"  >
                    No Order added. </td> </tr>}
            
               {orders.map((order, index) =>
                <tr key={index}
                  className={`border-b ${index % 2 != 0 ? "bg-gray-50" : "bg-white"
                    }`} >
                  <td  className="px-6 py-4 text-sm text-gray-700">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700"> {order.orderDate} at {order.orderTime}  </td>
                  <td className="px-6 py-4 text-sm text-gray-700"> &#8377;{order.total}  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.paymentMethod} </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {order.status=="delivered" ? <span className="text-green-700">{order.status}</span> :
                    <span className="text-red-700">{order.status}</span>} </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <Link to={`/myorders/${order.id}`}>
                    <button type="button" className='me-2 bg-blue-400 text-white p-3 rounded-md '>View</button>
                    </Link>
                   </td>
                
                </tr>
              )}
            </tbody> 
          </table>
        </div>
    
      </div>
  )
}

export default MyOrders
