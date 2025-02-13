import React, { Component } from 'react'

export default class Eventandstate extends Component {
    constructor(props){
        super(props)
        this.state = {count:0}
    }
     handleClick = () => { 
        let a = 1
        let b= 3
        alert(`button clicked ${a+b}`)   
    }
     handleClick1=(a,b)=>{  alert(a+b) }
  render() {
    return (
     <>
        <>      <h1>Events</h1>
                <button type="button" className='btn btn-primary me-2'
                    onClick={() => alert("button clicked")} >display alert</button>

                <button type="button" className='btn btn-primary me-2'
                    onClick={this.handleClick} >click me</button>

                <button type="button" className='btn btn-primary me-2'
                    onClick={() => this.handleClick1(2, 3)}>click me</button>
        </>
            <>
                <h1>Counter using state in class</h1>
                <h1>{this.state.count}</h1>
            </>
     </>
    )
  }
}
