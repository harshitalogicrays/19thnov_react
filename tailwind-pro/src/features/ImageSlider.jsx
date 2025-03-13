import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: false,  infinite: true,   speed: 500, slidesToShow: 1,
        slidesToScroll: 1, autoplay: true,  autoplaySpeed: 3000,   arrows: false,   pauseOnHover: false,   };
    
      const products = [
        { id: 1, name: "Product 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHCbHGd7D623E5XBmXkDJSQb0iTK5l3GtSQ&s"},
        { id: 2, name: "Product 2", image: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"},
        { id: 3, name: "Product 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-GE-zddIxswu5di-yvjve4upfT3xBNHA3A&s"},
        { id: 4, name: "Product 4", image: "https://media.istockphoto.com/id/1314492933/photo/circus-merry-go-round-colourful.jpg?s=612x612&w=0&k=20&c=gWgxfaPy6LkJbUImD1_Xleadu0N4CsF73FdaN4wl2lM="},
      ];
  return (
    <div className="min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <div>
                <img src={product.image} alt={product.name} className="w-full h-88 object-cover" />
                {/* <h3 className="text-lg font-bold text-center mt-2">{product.name}</h3> */}
              </div>
            </div>
          ))}
        </Slider>

    
      <section className="py-10 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700">Email: support@example.com</p>
        <p className="text-gray-700">Phone: +1234567890</p>
      </section>
      <footer className="bg-blue-600 text-white p-4 text-center mt-10">
        © 2025 All Rights Reserved.
      </footer>
    </div>
  )
}

export default ImageSlider
