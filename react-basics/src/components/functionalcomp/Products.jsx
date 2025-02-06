import React from 'react'
import products from '/src/assets/productlist.js'
import DisplayProducts from './DisplayProducts'
const Products = () => {
  return (
    <div className='container mt-5 p-3'>
        <h1>Products Page</h1>
        {products.length==0 && <h1>No Product Found</h1>}

        <div className="row">
        {products.map((product,index)=><DisplayProducts key={index} product={product} />)}
        </div>
    </div>
  )
}

export default Products
