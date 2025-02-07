import React from 'react'
import { Routes, Route } from 'react-router'
import App from '../App'
import About from './functionalcomp/About'
import Home from './functionalcomp/Home'
import Products from './functionalcomp/Products'
import Contact from './functionalcomp/Contact'
import Login from './functionalcomp/Login'
import Register from './functionalcomp/Register'
import Header from './functionalcomp/Header'
import PageNotFound from './PageNotFound'
import Firstfuncomp from './functionalcomp/Firstfuncomp'
import Propsdemoinfun from './functionalcomp/Propsdemoinfun'
import Eventsdemoinfun from './functionalcomp/Eventsdemoinfun'
import StateDemo from './functionalcomp/StateDemo'
import ListRendering from './functionalcomp/ListRendering'
import Form1 from './functionalcomp/Form1'
import FormValidations from './functionalcomp/FormValidations'
import ReactHookFormDemo from './functionalcomp/ReactHookFormDemo'
import Liftingthestateup from './functionalcomp/Liftingthestateup'
import HooksDemo from './functionalcomp/HooksDemo'
import UseCallbackDemo from './functionalcomp/UseCallbackDemo'
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
          <Route element={<Header/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/> }/>
              <Route path='products' element={<Products/>}/>
              <Route path='contact' element={<Contact/>}/>   
              <Route path='fun/first' element={<Firstfuncomp/>}/>
              <Route path='fun/props' element={<Propsdemoinfun/>}/> 
              <Route path='fun/event' element={<Eventsdemoinfun/>}/> 
              <Route path='fun/state' element={<StateDemo/>}/> 
              <Route path='fun/list' element={<ListRendering/>}/> 
              <Route path='fun/form' element={<Form1/>}/> 
              <Route path='fun/form/validations' element={<FormValidations/>}/> 
              <Route path='fun/form/rhf' element={<ReactHookFormDemo/>}/> 
              <Route path='fun/stateup' element={<Liftingthestateup/>}/> 
              <Route path='fun/hooks' element={<HooksDemo/>}>
                  <Route index element={<StateDemo/>}/>
                  <Route path='useeffect' element={<HooksDemo/>}/>
                  <Route path='usecallback' element={<UseCallbackDemo/>}/>
                  <Route path='useref' element={<HooksDemo/>}/>
                  <Route path='usememo' element={<HooksDemo/>}/>
                  <Route path='usetransition' element={<HooksDemo/>}/>
                  <Route path='useimperativehandle' element={<HooksDemo/>}/>
                  <Route path='usecontext' element={<HooksDemo/>}/>
                  <Route path='customhook' element={<HooksDemo/>}/>

              </Route>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
      </Route>    

      <Route path="*" element={<PageNotFound/>}/>     
    </Routes>
  )
}

export default Routing
