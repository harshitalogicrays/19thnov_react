import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { selectorders } from '../../redux/orderSlice'
import ChangeOrderStatus from './ChangeOrderStatus'

const OrderDetails = () => {
  const {id} = useParams()
  const orders =  useSelector(selectorders)
  const order = orders.find(order=>order.id==id)
  return (
    <div className="container mx-auto shadow-lg mt-2 p-6 bg-white rounded-lg">
    <h1 className="text-2xl font-bold mb-4">My Order Details</h1>
    <hr className="mb-4" />
    <div className="mb-3 w-50">
        <Link to='/admin/view/orders' className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
            <FaArrowCircleLeft /> Back to Orders
        </Link>
    </div>
    {order == null ? (
        <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-pulse"></div>
        </div>
    ) : (
        <>
         
              {order.status=="delivered" ? <h4 className='text-lg font-semibold text-blue-500'>Order Status: {order.status}</h4>  
                  : <ChangeOrderStatus order={order}/> 
            }             
            
            <div className='mt-4'>
                <b className="text-gray-700">Shipping Address</b><br />
                <p className="text-gray-600">
                    Name: {order.shippingAddress.name},<br />
                    Address: {order.shippingAddress.address1},<br />
                    City: {order.shippingAddress.city}<br />
                    Pincode: {order.shippingAddress.pincode},<br />
                    Contact: {order.shippingAddress.mobile}
                </p>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-2 border">Sr. No</th>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Image</th>
                            <th className="p-2 border">Price</th>
                            <th className="p-2 border">Quantity</th>
                            <th className="p-2 border">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.cartItems.length === 0 && (
                            <tr>
                                <td colSpan={6} className="text-center p-4 border">No Item in Cart</td>
                            </tr>
                        )}
                        {order.cartItems.map((c, i) => (
                            <tr key={i} className="text-center border">
                                <td className="p-2 border">{i + 1}</td>
                                <td className="p-2 border">{c.title}</td>
                                <td className="p-2 border">
                                    <img src={c.image} alt={c.title} className="h-12 w-12 object-cover mx-auto" />
                                </td>
                                <td className="p-2 border">&#8377;{c.price}</td>
                                <td className="p-2 border">{c.qty}</td>
                                <td className="p-2 border">&#8377;{c.qty * c.price}</td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100 font-semibold">
                            <td colSpan={5} className="p-2 border text-right">Total Amount:</td>
                            <td className="p-2 border text-center">&#8377;  {order.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )}
</div>
  )
}

export default OrderDetails
