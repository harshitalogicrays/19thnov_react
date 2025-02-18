import React from 'react'
import { Route, Routes } from 'react-router'
import App from '../App'
import Header from './Header'
import Home from './Home'
import About from './About'
import Products from './Products'
import Register from './Register'
import Login from './Login'
import PageNotFound from './PageNotFound'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="products" element={<Products/>}/>              
            </Route>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Routing
