import React, { Component } from 'react'

export default class Forminclass extends Component {
  constructor(props) {
    super(props)
    this.state = {       
      title:"Form Design",
      user:{username:'',email:'',password:'',cpassword:''},
    }
  }
  handleChange =(e)=>{
    this.setState({
      user : {...this.state.user ,[e.target.name]:e.target.value}
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    alert(JSON.stringify(this.state.user))
}

  render() {
    return (
      <div className='container mt-5 col-8'>
        <h1 className='Aligntext'>{this.state.title}</h1><hr/>
    <form onSubmit={this.handleSubmit}>
        <div className="row">
            <div className="mb-3 col">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" 
                value={this.state.user.username} onChange={this.handleChange}/>
            </div>
            <div className="mb-3 col">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={this.handleChange}
              />
            </div>
        </div>
       
        <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
            <input type="password" className="form-control" name="password" value={this.state.user.password} onChange={this.handleChange}
           />
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm password</label>
            <input type="password" className="form-control" name="cpassword"  value={this.state.user.cpassword} onChange={this.handleChange}
           />
        </div>
        <button type="submit" class="btn btn-primary"> Submit </button>
        
    </form>
    </div>
    )
  }
}
