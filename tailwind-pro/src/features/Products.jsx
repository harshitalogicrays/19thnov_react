import React, { useEffect, useState } from 'react'
import ProductsItems from './ProductsItems'
import useFetchApiData from '../useFetchApiData'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_CATEGORY, selectCategory, selectFilters, selectSearch } from '../redux/filterSlice'
import { allproducts, selectProducts } from '../redux/productSlice'

const Products = () => {
  const dispatch = useDispatch()
  let {data} = useFetchApiData("https://67b69e6007ba6e5908412007.mockapi.io/products")
  useEffect(()=>{ dispatch(allproducts(data)) },[data])
  const products = useSelector(selectProducts)
    
  const searchval  = useSelector(selectSearch)
  const filterProducts = useSelector(selectFilters) 
  const catval = useSelector(selectCategory)

  const categories =Array.from(new Set(products.map(item=>item.category)))
  const handleCategory =(category)=>{
    dispatch(FILTER_BY_CATEGORY({products,category}))
  } 
  return (
    <div className='flex'>
      <div className='flex-1'>
          <div className="border-1 border-gray-600 mt-24 ms-5 p-3 rounded-lg">
            Categories <hr className='my-2'/>
            {categories.map((category,index)=>
              <div className="block mb-3" key={index}>
                   <label onClick={()=>handleCategory(category)}>{category}</label>
              </div>)}
          </div>
        
      </div>
      <div className="flex-3 mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
          {
            (searchval !='' || catval !='' ) ? <> 
              {filterProducts.length==0 ? <h1 className="text-2xl font-bold tracking-tight text-gray-900">No Product Found</h1> : <ProductsItems products={filterProducts}/>}
            
            </>: <ProductsItems products={products}/> 
          }
           
      </div>
    </div>
  )
}

export default Products
