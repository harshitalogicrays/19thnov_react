import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useCart } from '../CartContext'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router'

const ProductsItems = ({products}) => {
  const cartcon = useCart()
    const handleAddToCart=(product)=>{
       cartcon.ADD_TO_CART(product)
    }

    const itemsPerPage =  4
    const [itemOffset,setItemOffset] =useState(0)
    const [pageCount,setPageCount] = useState(0)
    const [currentItems,setCurrentItems] =useState([])
    
    const handlePageClick = (event) => {//2 page means index1
      const newOffset = (event.selected * itemsPerPage) % products.length;  //4%22=> 4
      setItemOffset(newOffset);//itemOffset=4 
    };
    useEffect(()=>{
      const endOffset = itemOffset + itemsPerPage;//0+4 => 4 ,8
      setCurrentItems(products.slice(itemOffset, endOffset)) //(0 to 3) 4 exclude ,4 to 8
      setPageCount( Math.ceil(products.length / itemsPerPage)) //22/4=>6
    },[itemOffset , products])
  return (
    <> {products.length==0 && <h1 className='text-2xl'> No Product Found</h1>}
     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {currentItems.map((product) => (
          <Fragment key={product.id}>
              <div  className="group relative">
                <Link to={`/product/details/${product.id}`}>
                <img
                  alt={product.title} 
                  src={product.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}

                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div> </Link>
                <button type="button" className='border-1 p-2 bg-indigo-500 text-white rounded-lg mt-3 cursor-pointer relative' onClick={()=>handleAddToCart(product)}>Add to cart</button>
              </div>
          </Fragment>         
          ))}</div>
          
        <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<previous"
        renderOnZeroPageCount={null}
        containerClassName='flex  justify-end border-gray-200 bg-white px-4 py-3 '

        pageClassName='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:cursor-pointer focus:z-20 focus:outline-offset-0 '

        previousClassName='relative inline-flex items-center  px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:cursor-pointer'

        nextClassName='relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:cursor-pointer'
        
        activeClassName='relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      />

    </>
  )
}

export default ProductsItems
