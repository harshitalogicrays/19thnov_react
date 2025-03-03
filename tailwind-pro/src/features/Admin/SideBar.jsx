import React from 'react'
import { FaHome, FaListAlt, FaShoppingBag } from 'react-icons/fa'
import { FaList } from 'react-icons/fa6'
import { NavLink } from 'react-router'

const SideBar = () => {
  return (
    <div className="w-20 sm:w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 text-2xl font-bold">
        <span className="hidden sm:block">Admin Panel</span>
      </div>
      <nav className="flex flex-col mt-4">
        <NavLink to='/admin' className="flex items-center p-4 hover:bg-gray-700">
          <FaHome className="mr-0 sm:mr-3" />
          <span className="hidden sm:block">Dashboard</span> </NavLink>
          <NavLink to='/admin/add/product' className="flex items-center p-4 hover:bg-gray-700">
          <FaShoppingBag className="mr-0 sm:mr-3" />
          <span className="hidden sm:block">Add Product</span> </NavLink>
          <NavLink to='/admin/view/product' className="flex items-center p-4 hover:bg-gray-700">
          <FaList className="mr-0 sm:mr-3" />
          <span className="hidden sm:block">View Products</span> </NavLink>
          <NavLink to='/admin/view/orders' className="flex items-center p-4 hover:bg-gray-700">
          <FaListAlt className="mr-0 sm:mr-3" />
          <span className="hidden sm:block">Orders</span> </NavLink>
      </nav>  </div>	
  )
}

export default SideBar
