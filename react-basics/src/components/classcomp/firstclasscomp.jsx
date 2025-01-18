/*import { Component } from "react";
import Firstfuncomp from "../functionalcomp/Firstfuncomp";
class Firstclasscomp extends Component{
    render(){
        return(
            <div>
                <h2>First class component</h2>
                <Firstfuncomp></Firstfuncomp>
            </div>)
    }}
export default Firstclasscomp*/

//rcc
import React, { Component } from 'react'
import Firstfuncomp from '../functionalcomp/Firstfuncomp'
export default class Firstclasscomp extends Component {
  render() {
    return (
      <div>
         <h2>First class component</h2>
         <Firstfuncomp></Firstfuncomp>
      </div>
    )
  }
}
