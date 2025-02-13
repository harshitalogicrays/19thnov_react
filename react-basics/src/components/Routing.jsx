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
import UseEffectDemo from './functionalcomp/UseEffectDemo'
import UseRefDemo from './functionalcomp/UseRefDemo'
import UseIHParent from './functionalcomp/UseIHParent'
import UseMemoDemo from './functionalcomp/UseMemoDemo'
import USeTransitionDemo from './functionalcomp/USeTransition'
import UseContextDemo from './functionalcomp/UseContextDemo'
import CustomHookDemo from './functionalcomp/CustomHookDemo'
import MyFirstContextComp from './functionalcomp/MyFirstContextComp'
import ClassLayout from './classcomp/classLayout'
import Firstclasscomp from './classcomp/firstclasscomp'
import Propsinclass from './classcomp/Propsinclass'
import Eventandstate from './classcomp/Eventandstate'
import Forminclass from './classcomp/Forminclass'
import LifeCyclemethods from './classcomp/LifeCyclemethods'
import Purecompdemo from './classcomp/Purecompdemo'
import Refinclass from './classcomp/Refinclass'
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
          <Route element={<MyFirstContextComp><Header/></MyFirstContextComp>}>
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
                  <Route path='useeffect' element={<UseEffectDemo/>}/>
                  <Route path='usecallback' element={<UseCallbackDemo/>}/>
                  <Route path='useref' element={<UseRefDemo/>}/>
                  <Route path='usememo' element={<UseMemoDemo/>}/>
                  <Route path='usetransition' element={<USeTransitionDemo/>}/>
                  <Route path='useimperativehandle' element={<UseIHParent/>}/>
                  <Route path='usecontext' element={<UseContextDemo/>}/>
                  <Route path='customhook' element={<CustomHookDemo/>}/>

              </Route>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          
          <Route path='class' element={<ClassLayout/>}>
              <Route index element={<Firstclasscomp/>}/>
              <Route path='props' element={<Propsinclass/>}/>
              <Route path='eventstate' element={<Eventandstate/>}/>
              <Route path='form/validations' element={<Forminclass/>}/>
              <Route path='lifecycle' element={<LifeCyclemethods/>}/>
              <Route path='pure' element={<Purecompdemo/>}/>
              <Route path='ref' element={<Refinclass/>}/>

          </Route>

      </Route>    

      <Route path="*" element={<PageNotFound/>}/>     
    </Routes>
  )
}

export default Routing
