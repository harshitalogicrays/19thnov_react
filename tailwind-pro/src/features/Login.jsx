import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Login = () => {
  const location = useLocation()
  const redirectURL = location?.state ? location.state.path :'/'

  const redirect = useNavigate()
  const {register,handleSubmit,formState:{errors},trigger,setFocus} =useForm()
  const loginUser = async(data)=>{
    try{
        const res = await fetch(`https://67b69e6007ba6e5908412007.mockapi.io/users?email=${data.email}`)
        const result = await res.json()
        let {email,password,role,username,id} = result[0]
        if(password == data.password){
          let obj = {isLoggedIn:true,username,email,role,id}
          sessionStorage.setItem("19thnov",JSON.stringify(obj))
            toast.success("loggedIn successfully")
            // redirect('/')
            if(role=="1") redirect(redirectURL)
            else if(role=="0") redirect('/admin')
        }
        else {toast.error("Invalid Credentials")}
    }
    catch(err){toast.error(err.message)}
  }
  useEffect(()=>{setFocus('email')},[])
  return (
   <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(loginUser)} method="POST" className="space-y-6" noValidate>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                {...register('email',{required:"email is required" , pattern:{
                  value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/,message:"Invalid Email"
                }})} onBlur={()=>trigger('email')}/>
              </div>
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                {...register('password',{required:"password is required"})} onBlur={()=>trigger('password')}/>
              </div>
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <Link to='/register' className="font-semibold text-indigo-600 hover:text-indigo-500">
            SignUp
            </Link>
          </p>
        </div>
      </div>
   </>
  )
}

export default Login
