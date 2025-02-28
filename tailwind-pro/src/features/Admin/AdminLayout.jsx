import React from 'react'
import SideBar from './SideBar'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
<div className="flex h-screen"> 
        <SideBar/>
      <div className="flex flex-col flex-grow">  <AdminHeader />
        <main className="p-6 bg-gray-50 flex-grow overflow-y-auto"><Outlet/></main>
      </div> </div>
  )
}

export default AdminLayout
