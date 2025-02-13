import React, { Component } from 'react'
import Props1 from './Props1'
import Firstclasscomp from './firstclasscomp'

export default class Propsinclass extends Component {
  render() {
    return (
      <div>
        <Props1 title="props demo" isActive={true} mobile={987654} username="Ram">
            <h2>children</h2>
        </Props1>

        <Props1 title="props demo" isActive={true} mobile={987654}>
            <p>paragraph</p>
            <Firstclasscomp/>
        </Props1>
      </div>
    )
  }
}
