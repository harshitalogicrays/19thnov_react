import React, { Component, PureComponent } from 'react'

export default class Purecompdemo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { username:'Ram'}
  }
  handleChange =(e)=>{
    console.log("handleChange called")
    this.setState({username:"Hanuman"})
  }
  render() {
    console.log("render called")
    return (
      <div className='container mt-5'>
        <button type="button" className='btn btn-primary' onClick={this.handleChange}>Change Username</button>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}
