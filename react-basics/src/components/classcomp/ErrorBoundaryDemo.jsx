import React, { Component } from 'react'
import ErrorComp from './ErrorComp'
import ErrorBoundary from './ErrorBoundary'

export default class ErrorBoundaryDemo extends Component {
  render() {
    return (
      <div>
<ErrorBoundary> <ErrorComp name = "Smith"/> </ErrorBoundary>
<ErrorBoundary><ErrorComp name = "Olive"/></ErrorBoundary>
<ErrorBoundary><ErrorComp name = "Joker"/></ErrorBoundary>            
<ErrorBoundary><ErrorComp name = "Walter"/></ErrorBoundary>
       
      </div>
    )
  }
}
