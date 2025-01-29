import React, { useState } from 'react'

const FormValidations = () => {
  let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})
  let [errors,setErrors] =useState({username:'',email:'',password:'',cpassword:''})
    let handleChange=(e)=>{
             setUser((prevState)=>({...prevState ,[e.target.name]:e.target.value }))
    }
    let checkUsername = ()=>{
        if(user.username==''){
            setErrors((prevErrors)=>({...prevErrors ,username:"username is required" }));return false
        }
        else { setErrors((prevErrors)=>({...prevErrors ,username:"" }));return true}
    }
    let checkEmail = ()=>{
        let pattern = /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if(user.email==''){
            setErrors((prevErrors)=>({...prevErrors ,email:"email is required" }));return false
        }
        else if(!pattern.test(user.email)){
            setErrors((prevErrors)=>({...prevErrors ,email:"Invalid Email" }));return false
        }
        else { setErrors((prevErrors)=>({...prevErrors ,email:"" }))};return true
    }
    let checkPwd = ()=>{
        if(user.password==''){
            setErrors((prevErrors)=>({...prevErrors ,password:"password is required" }));return false
        }
        else { setErrors((prevErrors)=>({...prevErrors ,password:"" }));return true}
    }
    let checkCpwd = ()=>{
        if(user.cpassword=='' || user.password !=user.cpassword){
            setErrors((prevErrors)=>({...prevErrors ,cpassword:"password not same" }));return false
        }
        else { setErrors((prevErrors)=>({...prevErrors ,cpassword:"" }));return true}
    }
    let handleSubmit = (e)=>{
        e.preventDefault()
        let un = checkUsername();let em=checkEmail();let pw=checkPwd();let cpw= checkCpwd()
        if(un==false || em==false || pw==false || cpw==false){e.preventDefault()}
        else {
            alert(JSON.stringify(user))
        }
    }
      return (
    <div className='container mt-5 col-8'>
        <h1 className='Aligntext'>Form Validation</h1><hr/>
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="mb-3 col">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username"
                value={user.username} onChange={handleChange} onBlur={checkUsername}/>
                {errors?.username && <span className="text-danger">{errors.username}</span>}
            </div>
            <div className="mb-3 col">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email"
                value={user.email} onChange={handleChange} onBlur={checkEmail}/>
                 {errors?.email && <span className="text-danger">{errors.email}</span>}
            </div>
        </div>
       
        <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
            <input type="password" className="form-control" name="password"
            value={user.password} onChange={handleChange} onBlur={checkPwd}/>
              {errors?.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm password</label>
            <input type="password" className="form-control" name="cpassword"
            value={user.cpassword} onChange={handleChange} onBlur={checkCpwd}/>
            {errors?.cpassword && <span className="text-danger">{errors.cpassword}</span>}
        </div>
        <button type="submit" class="btn btn-primary"> Submit </button>
        
    </form>
    </div>
  )
}

export default FormValidations
