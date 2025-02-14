import React, { Component } from 'react'

export default class Eventandstate extends Component {
    constructor(props){
        super(props)
        this.state = {count:0 , isActive:true , products:[]}
    }
     handleClick = () => { 
        let a = 1
        let b= 3
        alert(`button clicked ${a+b}`)   
    }
     handleClick1=(a,b)=>{  alert(a+b) }
     increase = ()=>{
        this.setState({ count : this.state.count + 1 })
     }
     decrease = ()=>{
        // this.setState({ count : this.state.count - 1 })
        this.setState(prevState => ({count: prevState.count-1}) )
     }
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
                <button type="button" className='btn btn-primary me-2' onClick={this.increase}>Increase</button>
            <button type="button" className='btn btn-primary me-2' onClick={this.decrease}>
                Decrease</button>
            <button type="button" className='btn btn-primary me-2' onClick={()=>this.setState({count:0})}>
                Reset</button>
            <button type="button" className='btn btn-primary me-2' onClick={()=>this.setState({count:-this.state.count})}>
                Change Sign</button>
                <h1>{this.state.count}</h1>
            </>
     </>
    )
  }
}
