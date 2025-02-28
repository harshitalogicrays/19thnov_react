import React from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const AdminHeader = () => {
  const navigate = useNavigate()
     const handleLogout=()=>{
          if(sessionStorage.getItem("19thnov")){
            sessionStorage.removeItem("19thnov")
            toast.success("loggedOut successfully")
            navigate('/')
          }
         }
  return (
    <header className="flex items-center justify-between h-16 bg-gray-100 px-6 shadow-md">
        <h1 className="text-xl font-semibold">Welcome to the Admin Panel</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Admin</span>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer" 
          onClick={handleLogout}> 
             Logout </button>
        </div> </header>
  )
}

export default AdminHeader
