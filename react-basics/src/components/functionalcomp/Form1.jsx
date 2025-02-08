import React, { useEffect, useRef, useState } from 'react'

const Form1 = () => {
    let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})
    let focusRef = useRef()
    let handleChange=(e)=>{
        // setUser({...user ,[e.target.name]:e.target.value}) 
        setUser((prevState)=>({...prevState ,[e.target.name]:e.target.value }))
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }

    useEffect(()=>{
        focusRef.current.focus()
        focusRef.current.className="form-control bg-danger"
    },[])
      return (
    <div className='container mt-5 col-8'>
        <h1 className='Aligntext'>Form using Bootstrap</h1><hr/>
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

export default Form1
