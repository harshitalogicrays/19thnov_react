import React, { Component } from 'react'

export default class FormValidationsinClass extends Component {
  constructor(props) {
    super(props)
    this.state = {       
      title:"Form Validations",
      user:{username:'',email:'',password:'',cpassword:''},
      errors:{username:'',email:'',password:'',cpassword:''}
    } }
  handleChange =(e)=>{
    this.setState({
      user : {...this.state.user ,[e.target.name]:e.target.value}
    })}

  checkUsername = ()=>{
    if(this.state.user.username==''){
      this.setState(prevState=>({errors:{...prevState.errors,username:"username is required" }}));
      return false}
    else { this.setState(prevState=>({errors:{...prevState.errors,username:"" }}));return true}}
checkEmail = ()=>{
  let pattern = /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/
  if(this.state.user.email==''){
    this.setState(prevState=>({errors:{...prevState.errors,email:"email is required" }}));return false}
  else if(!pattern.test(this.state.user.email)){
    this.setState(prevState=>({errors:{...prevState.errors,email:"Invalid Email" }}));return false}
  else {  this.setState(prevState=>({errors:{...prevState.errors,email:"" }}));return true}}
 checkPwd = ()=>{
  if(this.state.user.password==''){
    this.setState(prevState=>({errors:{...prevState.errors,password:"password is required" }}));return false}
  else { this.setState(prevState=>({errors:{...prevState.errors,password:"" }}));return true}}
 checkCpwd = ()=>{
  if(this.state.user.cpassword=='' || this.state.user.password !=this.state.user.cpassword){
    this.setState(prevState=>({errors:{...prevState.errors,cpassword:"password not same" }}));return false}
  else {  this.setState(prevState=>({errors:{...prevState.errors,cpassword:"" }}));}}

  handleSubmit = (e)=>{
    e.preventDefault()
    let un = this.checkUsername();let em=this.checkEmail();let pw=this.checkPwd();let cpw= this.checkCpwd()
    if(un==false || em==false || pw==false || cpw==false){e.preventDefault()}
    else {
        alert(JSON.stringify(this.state.user))}
}

  render() {
    return (  <div className='container mt-5 col-8'>
        <h1 className='Aligntext'>{this.state.title}</h1><hr/>
    <form onSubmit={this.handleSubmit}>
        <div className="row">
            <div className="mb-3 col">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" value={this.state.user.username} onChange={this.handleChange} onBlur={this.checkUsername}/>
                {this.state.errors?.username && <span className="text-danger">{this.state.errors.username}</span>}
            </div>
            <div className="mb-3 col">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={this.handleChange} onBlur={this.checkEmail}
              />
                {this.state.errors?.email && <span className="text-danger">{this.state.errors.email}</span>}

            </div>
        </div>
       
        <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
            <input type="password" className="form-control" name="password" value={this.state.user.password} onChange={this.handleChange} onBlur={this.checkPwd}
           />
                {this.state.errors?.password && <span className="text-danger">{this.state.errors.password}</span>}

        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm password</label>
            <input type="password" className="form-control" name="cpassword"  value={this.state.user.cpassword} onChange={this.handleChange} onBlur={this.checkCpwd}
           />
                {this.state.errors?.cpassword && <span className="text-danger">{this.state.errors.cpassword}</span>}

        </div>
        <button type="submit" class="btn btn-primary"> Submit </button>
        
    </form>
    </div>
    )
  }
}
