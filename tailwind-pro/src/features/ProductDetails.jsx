import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../redux/productSlice'
import { useParams } from 'react-router'
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useCart } from '../CartContext';
import ReactStars from 'react-stars';

const ProductDetails = () => {
    const products =  useSelector(selectProducts)
    const {id} = useParams()
    const product =  products.find(item=>item.id==id)

    const {cartItems,decrease, increase , ADD_TO_CART} = useCart()
    const itemIndex =  cartItems.findIndex(item=>item.id==id)
    const item =  cartItems.find(item=>item.id==id)

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      if (product) {
        fetch(`https://67ce5dd3125cd5af757a41a2.mockapi.io/reviews?productId=${product.id}`)
          .then(res => res.json())
          .then(data => setReviews(data))
          .catch(err => console.error("Error fetching reviews:", err));
      }
    }, [product]);
    const aggregateRating =
    reviews.length > 0
      ? (reviews.reduce((acc, cur) => acc + Number(cur.rating), 0) / reviews.length).toFixed(1)
      : 0;
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
            {/* Display Reviews Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
          {reviews.length > 1 && (
            <div className="mb-4">
              <p className="text-lg font-medium">
                Aggregate Rating: <span className="text-blue-600">{aggregateRating} / 5</span> from {reviews.length} reviews.
              </p>
              <ReactStars 
                value={Number(aggregateRating)} 
                count={5} 
                size={20} 
                edit={false} 
              />
            </div>
          )}
          {reviews.length === 0 ? (
            <p className="text-gray-600">No reviews yet.</p>
          ) : (
            reviews.map(review => (
              <div key={review.id} className="border p-4 mb-4 rounded">
                <div className="flex items-center mb-2">
                  <ReactStars 
                    value={review.rating} 
                    count={5} 
                    size={16} 
                    edit={false} 
                  />
                  <span className="ml-2 text-gray-600">{review.rating} / 5</span>
                </div>
                <p className="text-gray-800"><strong>User:</strong> {review.username}</p>
                <p className="text-gray-800">{review.comment}</p>
                {review.date && (
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))
          )}
          </div>
      </div>
    </div>
    </>

  )
}

export default ProductDetails
