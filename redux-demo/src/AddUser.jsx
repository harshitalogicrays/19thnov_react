import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addusers } from './redux/userSlice'

const AddUser = () => {
    const dispatch  =  useDispatch()
    let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})
    let focusRef = useRef()
    let handleChange=(e)=>{
        setUser((prevState)=>({...prevState ,[e.target.name]:e.target.value })) }
    let handleSubmit = (e)=>{
        e.preventDefault()
        let {username,email,password} = user
        if(!username || !email || !password){
            toast.error("please fill fields")
        }
        else {
            dispatch(addusers(user))
            setUser({username:'',email:'',password:'',cpassword:''})
        }

    }

    useEffect(()=>{
        focusRef.current.focus()},[])
      return (
    <div>
        <h3>Add User</h3><hr/>
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="mb-3 col">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" ref={focusRef}
                value={user.username} onChange={handleChange}/>
            </div>
            <div className="mb-3 col">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email"
                value={user.email} onChange={handleChange}/>
            </div>
        </div>
       
        <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
            <input type="password" className="form-control" name="password"
            value={user.password} onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm password</label>
            <input type="password" className="form-control" name="cpassword"
            value={user.cpassword} onChange={handleChange}/>
        </div>
        <button type="submit" class="btn btn-primary"> Submit </button>
        
    </form>
    </div>
  )
}

export default AddUser
