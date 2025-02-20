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
import { Cart } from './Cart'
import CartContext from '../CartContext'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<CartContext><App/></CartContext>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="products" element={<Products/>}/>        
                <Route path="cart" element={<Cart/>}/>              
            </Route>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Routing
