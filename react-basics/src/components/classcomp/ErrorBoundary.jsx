import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)  
      this.state = {hasError:false,  errmsg:'' }
    }
    
    static getDerivedStateFromError(error) {
            return { hasError: true }; }
    
    componentDidCatch(error) {
        console.log(error.message)
        this.setState({errmsg:error.message})  }
  render() {
    if (this.state.hasError) {
        // return <h1>Something went wrong.</h1>;
        return <div className='text-danger'>
             <h1>Something went wrong.</h1>
             <h1>{this.state.errmsg}</h1>
        </div>
    }
  
      return this.props.children; 
  }
}
