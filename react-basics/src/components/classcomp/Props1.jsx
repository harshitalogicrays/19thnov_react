import React, { Component } from 'react'

export default class Props1 extends Component {
  render() {
    return (
     <>
        <h1>{this.props.title}</h1>

        <h2>{this.props.mobile}</h2>

        {this.props.isActive ? <h4>{this.props.username} is Active</h4> : "User is not active"}

        {this.props.isActive && <h4>User is Active</h4>}
        {this.props.children}
        <hr/>   
     </>
    )
  }
}

Props1.defaultProps = {
    username:"LRA"
}