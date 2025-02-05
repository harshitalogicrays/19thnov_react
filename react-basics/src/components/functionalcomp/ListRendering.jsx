import React, { Fragment } from 'react'
import DisplayList from './DisplayList'
import Image1 from '/src/assets/images/a.jpg'
import Image2 from '/src/assets/images/b.jpg'
import Image3 from '/src/assets/images/c.jpeg'
import Image4 from '/src/assets/images/d.jpg'
import DisplayProducts from './DisplayProducts'

const ListRendering = () => {
    const names = ["aaa","bbb","ccc","ddd","eeee","fff","ggg","hhh","aaa"]
    const products = [
                      {id:1,name:'product1',price:890,image:Image1 , category:'category1',stock:10},
                      {id:2,name:'product2',price:1800,image:Image2 , category:'category2',stock:100},
                      {id:3,name:'product3',price:1000,image:Image3 , category:'category3',stock:0},
                      {id:4,name:'product4',price:800,image:Image4 , category:'category1',stock:20},
                      {id:5,name:'product5',price:200,image:Image2 , category:'category2',stock:200},
                      {id:6,name:'product6',price:900,image:Image1 , category:'category3',stock:90},
                      {id:7,name:'product7',price:80,image:Image4 , category:'category4',stock:1},                    
                    ] //array of objects
    // console.log(products[0].name)
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
              {products.length==0 && <tr><td colspan={6} className='text-center'>No Product Found</td></tr>}
              {products.map((product)=>
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
