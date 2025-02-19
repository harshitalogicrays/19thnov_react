import React from 'react'
import { toast } from 'react-toastify'

const ProductsItems = ({products}) => {
    const handleAddToCart=()=>{
        toast.warning("product added")
    }
  return (
    <>
    {products.length==0 && <h1 className='text-2xl'> No Product Found</h1>}
      {products.map((product) => (
            <div key={product.id} className="group relative">
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
              </div>
              <button type="button" className='border-1 p-2 bg-indigo-500 text-white rounded-lg mt-3 cursor-pointer relative' onClick={handleAddToCart}>Add to cart</button>
            </div>
          ))}
    </>
  )
}

export default ProductsItems
