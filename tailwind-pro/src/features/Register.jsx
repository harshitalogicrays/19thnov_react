import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Register = () => {
  const redirect = useNavigate()
  const [user,setUser] =useState({username:'',email:'',password:'',cpassword:'',role:'1'})
  const handleSubmit = async(e)=>{
    e.preventDefault()
   try{
      // await fetch("https://67b69e6007ba6e5908412007.mockapi.io/users",
      //   {method :"POST",
      //     headers:{'content-type':'application/json'},
      //     body:JSON.stringify(user)
      //   })
      await axios.post("https://67b69e6007ba6e5908412007.mockapi.io/users",user)      
        toast.success("registered successfully")
        redirect('/login')
   }
   catch(err){toast.error(err.message)}
  }
  return (
   <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create  an Account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" className="space-y-3" onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input  name="username"  type="text"
                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input name="email"  type="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input  name="password"  type="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="cpassword" className="block text-sm/6 font-medium text-gray-900">
                 Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input name="cpassword"  type="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})} />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm/6 text-gray-500">
            Already a member?{' '}
            <Link to='/login' className="font-semibold text-indigo-600 hover:text-indigo-500">
            SignIn
            </Link>
          </p>
        </div>
      </div>
   </>
  )
}

export default Register
