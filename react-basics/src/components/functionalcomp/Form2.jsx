import React, { useState } from 'react'

const Form2 = () => {
    let [user,setUser] = useState({username:'ram',email:'',password:'',cpassword:''})
    let handleSubmit = (e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
      return (
    <div className='container mt-5 col-8'>
        <h1 className='Aligntext'>Form using Bootstrap</h1><hr/>
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="mb-3 col">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username"
                value={user.username} onChange={(e)=>  setUser((prevState)=>({...prevState ,username:e.target.value }))}/>
            </div>
            <div className="mb-3 col">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email"
                value={user.email} onChange={(e)=>  setUser((prevState)=>({...prevState ,email:e.target.value }))}/>
            </div>
        </div>
       
        <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
            <input type="password" className="form-control" name="password"
            value={user.password} onChange={(e)=>  setUser((prevState)=>({...prevState ,password:e.target.value }))}/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm password</label>
            <input type="password" className="form-control" name="cpassword"
            value={user.cpassword} onChange={(e)=>  setUser((prevState)=>({...prevState ,cpassword:e.target.value }))}/>
        </div>
        <button type="submit" class="btn btn-primary"> Submit </button>
        
    </form>
    </div>
  )
}

export default Form2
