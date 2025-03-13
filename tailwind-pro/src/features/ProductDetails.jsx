import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../redux/productSlice'
import { useParams } from 'react-router'
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useCart } from '../CartContext';

const ProductDetails = () => {
    const products =  useSelector(selectProducts)
    const {id} = useParams()
    const product =  products.find(item=>item.id==id)

    const {cartItems,decrease, increase , ADD_TO_CART} = useCart()
    const itemIndex =  cartItems.findIndex(item=>item.id==id)
    const item =  cartItems.find(item=>item.id==id)
  return (
    <>

             <div className='flex items-center justify-center min-h-screen'>     
            <div className='max-w-6xl shadow shadow-gray-400 p-6 '>
            <h2 className="text-3xl font-bold text-center my-4">Product Details</h2>
                {/* <img src={product.image} className='w-4xl' /> */}
                <InnerImageZoom
                    src={product.image}
                    zoomSrc={product.image}
                    zoomType="hover"
                    zoomPreload={true}
                    zoomPosition="right"
                    className="w-full h-auto object-cover rounded-md cursor-zoom-in"
                />
                <h1 className="text-3xl font-bold mb-2 mt-4">{product.title}</h1>
                <p className="text-gray-700 mb-4">{product.category}</p>
                <p className="text-xl font-semibold mb-4">{product.price}</p>

                {itemIndex == -1 ?  
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={()=>ADD_TO_CART(product)}>
                Add to Cart</button>   :
                <>
                <button type="button" className='border border-gray-300  p-2'
                       onClick={()=>decrease(item)}>-</button>
                      <input  type="number" value={item.qty} readOnly
                        className="w-14  p-2 border border-gray-300  text-center" />
                        <button type="button" className='border border-gray-300  p-2'
                        onClick={()=>increase(item)}>+</button>
                </>
                }
               
            </div>
     
  </div>
    </>

  )
}

export default ProductDetails
