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
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
          <Route element={<Header/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/> }/>
              <Route path='products' element={<Products/>}/>
              <Route path='contact' element={<Contact/>}/>    
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
      </Route>    

      <Route path="*" element={<PageNotFound/>}/>     
    </Routes>
  )
}

export default Routing
