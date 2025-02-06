import React, { Fragment } from 'react'
import DisplayList from './DisplayList'
import products from '/src/assets/productlist.js'

const ListRendering = () => {
    const names = ["aaa","bbb","ccc","ddd","eeee","fff","ggg","hhh","aaa"]

    // products.map((product)=>console.log(product.name))
  return (
   <>
          {/* {names.join(",")} */}

          {/* {names.map((value,index)=><h1 key={index}>{value}</h1>)} */}

          {/* {names.map((value,index)=><Fragment key={index}>{value}</Fragment>)} */}

            {/* {names.map((val,i)=><DisplayList key={i} item={val} />)} */}

          {/* {JSON.stringify(products[0])} 
          */}
      <div className="container col-8">
<div class="table-responsive" >
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th><th>Price</th>
                    <th>Category</th><th>Stock</th>
                </tr>
            </thead>
            <tbody>
              {products.length==0 && <tr>
                <td colspan={6} className='text-center'>No Product Found</td></tr>}
              {products.map((product,index)=>
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td><img src={product.image} height="50px" width="50px"/></td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                  </tr>
              )}
          </tbody>
        </table>
      </div>
      </div>
   </>
  )
}

export default ListRendering
