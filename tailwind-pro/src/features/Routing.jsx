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
import Checkout from './Checkout'
import { Protected, ProtectedAdmin } from './hiddenlinks'
import AdminLayout from './Admin/AdminLayout'
import Dashboard from './Admin/Dashboard'
import AddProduct from './Admin/AddProduct'
import ViewProducts from './Admin/ViewProducts'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<CartContext><App/></CartContext>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="products" element={<Products/>}/>        
                <Route path="cart" element={<Cart/>}/>    
                <Route path="checkout" element={<Protected> <Checkout/></Protected>}/>              
            </Route>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path='admin' element={<ProtectedAdmin><AdminLayout/></ProtectedAdmin>}>
               <Route index element={<Dashboard/>}/>
               <Route path='add/product' element={<AddProduct/>}/>
               <Route path='view/product' element={<ViewProducts/>}/>
               <Route path='edit/product/:id' element={<AddProduct/>}/>

            </Route>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Routing
