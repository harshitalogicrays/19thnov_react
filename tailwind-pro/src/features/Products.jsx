import React, { useEffect, useState } from 'react'
import ProductsItems from './ProductsItems'

const Products = () => {
  let [products,setProducts] =useState([])
  const getProducts =async()=>{
    try{
      const res = await fetch("https://fakestoreapi.com/products")
      const data =  await res.json()
      setProducts(data)
    }
    catch(err){console.log(err)}
  }
  useEffect(()=>{getProducts()},[])
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
            <ProductsItems products={products}/> 
      </div>
    </div>
  )
}

export default Products
