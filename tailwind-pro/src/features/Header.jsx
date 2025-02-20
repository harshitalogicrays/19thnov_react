import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiBars3, HiBell, HiShoppingCart, HiXMark } from 'react-icons/hi2'
import { toast } from 'react-toastify'
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks'

const Header = () => {
  const navigate = useNavigate()
  const [username,setUsername]=useState("Guest") 
  const navigation = [
    { name: 'Home', href: '/'},
    { name: 'About', href: '/about' },
    { name: 'products', href: '/products' },
     ]
  
  const navLinks = ({isActive})=>isActive? 'rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white' : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
     
     const handleLogout=()=>{
      if(sessionStorage.getItem("19thnov")){
        sessionStorage.removeItem("19thnov")
        toast.success("loggedOut successfully")
        navigate('/')
      }
     }
     useEffect(()=>{
      if(sessionStorage.getItem("19thnov")){
          let obj = JSON.parse(sessionStorage.getItem("19thnov"))
         setUsername(obj.username)
      } else setUsername("Guest")
     },[sessionStorage.getItem("19thnov")])
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiBars3  aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <HiXMark aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h1 className="text-white">CRUD</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink key={item.name} to={item.href} className={navLinks} >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to='/cart'
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden me-3">
              <span className="absolute -inset-1.5" />
              <HiShoppingCart aria-hidden="true" className="size-9" />
              <span className='absolute -top-2 -right-3 bg-red-500 px-2 font-bold    text-white rounded-full'>0</span>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
            <ShowOnLogout>
            <NavLink to='/register' className={navLinks}>Register</NavLink>
            <NavLink to='/login' className={navLinks}>Login</NavLink>
            </ShowOnLogout>
            </div>
      
            <ShowOnLogin>
            <NavLink className="text-white">Welcome {username}</NavLink>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            </ShowOnLogin>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className = {({isActive})=>isActive ? 'block rounded-md px-3 py-2 text-base font-medium bg-gray-900 text-white' : 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}>
              {item.name}
            </NavLink>
          ))}
          <ShowOnLogout>
           <NavLink to='/register' className = {({isActive})=>isActive ? 'block rounded-md px-3 py-2 text-base font-medium bg-gray-900 text-white' : 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}>Register</NavLink>
           <NavLink to='/login' className = {({isActive})=>isActive ? 'block rounded-md px-3 py-2 text-base font-medium bg-gray-900 text-white' : 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'}>Login</NavLink>
           </ShowOnLogout>
        </div>
      </DisclosurePanel>
    </Disclosure>


      <Outlet/>
    </>
  )
}

export default Header
