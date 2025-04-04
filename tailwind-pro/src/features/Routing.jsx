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
import CheckoutPayment from './CheckoutPayment'
import ThankYou from './ThankYou'
import MyOrders from './MyOrders'
import MyOrderDetails from './MyOrderDetails'
import Orders from './Admin/Orders'
import OrderDetails from './Admin/OrderDetails'
import ProductDetails from './ProductDetails'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<CartContext><App/></CartContext>}>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="products" element={<Products/>}/>  
                <Route path="product/details/:id" element={<ProductDetails/>}/>        
                <Route path="cart" element={<Cart/>}/>    
                <Route path="checkout" element={<Protected> <Checkout/></Protected>}/>       
                <Route path="checkoutpayment" element={<Protected> <CheckoutPayment/></Protected>}/>              
                <Route path="thankyou" element={<Protected> <ThankYou/></Protected>}/>              
                <Route path="myorders" element={<Protected> <MyOrders/></Protected>}/>              
                <Route path="myorders/:id" element={<Protected> <MyOrderDetails/></Protected>}/>              
            </Route>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path='admin' element={<ProtectedAdmin><AdminLayout/></ProtectedAdmin>}>
               <Route index element={<Dashboard/>}/>
               <Route path='add/product' element={<AddProduct/>}/>
               <Route path='view/product' element={<ViewProducts/>}/>
               <Route path='edit/product/:id' element={<AddProduct/>}/>
               <Route path='view/orders' element={<Orders/>}/>
               <Route path='view/orders/:id' element={<OrderDetails/>}/>

            </Route>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Routing
