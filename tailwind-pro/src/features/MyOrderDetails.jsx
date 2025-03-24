import React, { useEffect, useState } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { selectorders } from '../redux/orderSlice'

import ReactStars from 'react-stars';

// Modal component for giving review for a particular product
const ReviewModal = ({ orderId, product, onClose, onReviewSubmitted, username }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      orderId,
      productId: product.id,
      productName: product.title,
      username,
      rating,
      comment,
      date: new Date().toISOString(),
    };

    try {
      // Update the endpoint as per your JSON server configuration
      const response = await fetch('https://67ce5dd3125cd5af757a41a2.mockapi.io/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      onReviewSubmitted(reviewData);
      onClose();
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-xl font-bold mb-4">
          Review: {product.title} (Order {orderId})
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Rating:</label>
            <ReactStars
              count={5}
              value={rating}
              size={24}
              onChange={(newRating) => setRating(newRating)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Comment:</label>
            <textarea
              className="w-full border p-2 rounded"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review..."
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const MyOrderDetails = () => {
  const {id} = useParams()
  const orders =  useSelector(selectorders)
  const order = orders.find(order=>order.id==id)

  const { username } = JSON.parse(sessionStorage.getItem('19thnov'));
    // State to control review modal display
    const [showReviewModal, setShowReviewModal] = useState(false);
    // Store the product selected for review
    const [selectedProduct, setSelectedProduct] = useState(null);
    // Track which products have been reviewed: key = productId, value = true
    const [reviewedProducts, setReviewedProducts] = useState({});
  
    useEffect(() => {
        if (order && username) {
          fetch(`https://67ce5dd3125cd5af757a41a2.mockapi.io/reviews?orderId=${order.id}&username=${username}`)
            .then(res => res.json())
            .then(data => {
              // Map productId to true if review exists
              const reviewed = {}
              data.forEach(review => {
                reviewed[review.productId] = true
              })
              setReviewedProducts(reviewed)
            })
            .catch(err => console.error("Error fetching existing reviews:", err))
        }
      }, [order, username])

    const handleOpenReview = (product) => {
      setSelectedProduct(product);
      setShowReviewModal(true);
    };
  
    const handleCloseReview = () => {
      setShowReviewModal(false);
      setSelectedProduct(null);
    };
  
    const handleReviewSubmitted = (reviewData) => {
      setReviewedProducts((prev) => ({
        ...prev,
        [reviewData.productId]: true,
      }));
    };

  return (
    <div className="container mx-auto shadow-lg mt-15 p-6 bg-white rounded-lg">
    <h1 className="text-2xl font-bold mb-4">My Order Details</h1>
    <hr className="mb-4" />
    <div className="mb-3 w-50">
        <Link to='/myorders' className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
            <FaArrowCircleLeft /> Back to Orders
        </Link>
    </div>
    {order == null ? (
        <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-pulse"></div>
        </div>
    ) : (
        <>
            <h4 className='text-lg font-semibold text-blue-500'>Order Status: {order.status}</h4>
            <div className='mt-4'>
                <b className="text-gray-700">Shipping Address</b><br />
                <p className="text-gray-600">
                    Name: {order.shippingAddress.name},<br />
                    Address: {order.shippingAddress.address1},<br />
                    City: {order.shippingAddress.city}<br />
                    Pincode: {order.shippingAddress.pincode},<br />
                    Contact: {order.shippingAddress.mobile}
                </p>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-2 border">Sr. No</th>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Image</th>
                            <th className="p-2 border">Price</th>
                            <th className="p-2 border">Quantity</th>
                            <th className="p-2 border">Total Price</th>
                            <th className='p-2 border'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.cartItems.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center p-4 border">No Item in Cart</td>
                            </tr>
                        )}
                        {order.cartItems.map((c, i) => (
                            <tr key={i} className="text-center border">
                                <td className="p-2 border">{i + 1}</td>
                                <td className="p-2 border">{c.title}</td>
                                <td className="p-2 border">
                                    <img src={c.image} alt={c.title} className="h-12 w-12 object-cover mx-auto" />
                                </td>
                                <td className="p-2 border">&#8377;{c.price}</td>
                                <td className="p-2 border">{c.qty}</td>
                                <td className="p-2 border">&#8377;{c.qty * c.price}</td>
                                <td className="p-2 border">
                      {reviewedProducts[c.id] ? (
                        <button
                          type="button"
                          className="bg-gray-400 text-white px-3 py-2 rounded"
                          disabled
                        >
                          Review Given
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="bg-green-500 text-white px-3 py-2 rounded"
                          onClick={() => handleOpenReview(c)}
                        >
                          Give Review
                        </button>
                      )}
                    </td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100 font-semibold">
                            <td colSpan={5} className="p-2 border text-right">Total Amount:</td>
                            <td className="p-2 border text-center">&#8377;  {order.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )}
     {showReviewModal && selectedProduct && (
        <ReviewModal
          orderId={order.id}
          product={selectedProduct}
          onClose={handleCloseReview}
          onReviewSubmitted={handleReviewSubmitted}
          username={username}
        />
      )}
</div>
  )
}

export default MyOrderDetails
