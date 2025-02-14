import React, { Component, createRef } from 'react'

export default class Refinclass extends Component {
  constructor(props) { //compo initialize
    super(props)
    this.state = {title:"Ref" }
    this.focusRef = createRef()
  }
componentDidMount(){ //component is completely loaded in the browser
  this.focusRef.current.focus()
}
  render() {
    return (
      <div className='container mt-5 col-8'>
        <h1 className='Aligntext'>{this.state.title}</h1><hr/>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" ref={this.focusRef} name="username"/>
            </div>
        
        <button type="button" class="btn btn-primary" onClick={()=>alert(this.focusRef.current.value)}> Fetch Value </button>
    </div>
    )
  }
}
