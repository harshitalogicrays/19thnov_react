import React, { Component } from 'react'

export default class LifeCyclemethods extends Component {
  constructor(props) {
    super(props)
    console.log("constructor  called")
    this.state = {username:"Harshita" ,count:1 }
    this.timer = ''
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps  called",state)
    return {state}
  }
  componentDidMount(){ //useEffect(()=>{},[])
    console.log("compoentDidMount called")
    this.timer =  setInterval(()=>{
      console.log("setinterval called")
      this.setState(prevState=>({count:prevState.count+1}))
     },3000)
  }
  shouldComponentUpdate(nextProp,nextState){
    console.log("shouldComponentUpdate called")
    if(this.state.count >= 5){return false}
    return true
  }
  componentDidUpdate(){
    console.log("compoentDidUpdate called")

  }
  componentWillUnmount(){
    console.log("componentWillUnmount called")
    clearInterval(this.timer)
  }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>{this.state.username}</h1>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
