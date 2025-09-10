import React from "react";
import { Link } from "react-router-dom";

// Sample featured products
const featuredProducts = [
  { id: 1, name: "Almonds", price: 12.99, image: "/images/almonds.jpg" },
  { id: 2, name: "Cashews", price: 14.99, image: "/images/cashews.jpg" },
  { id: 3, name: "Walnuts", price: 16.99, image: "/images/walnuts.jpg" },
];

const Home = () => {
  return (
    <div className="bg-yellow-50 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-20 bg-green-100">
         
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">
          Royal Dry Fruits
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Premium quality dry fruits delivered straight to your doorstep.
        </p>
        
        <Link
          to="/ShopOnline"
          className="bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Shop Now
        </Link>
        
      </section>
      <img
            src="/images/cover_photo.jpeg" // replace with your actual image path
            alt="Royal Dry Fruits Banner"
            className="w-full h-64 object-cover"
          />  
      {/* Why Choose Us */}
      <section className="py-16 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-900">Why Choose Us?</h2>
        <p className="text-gray-700 mb-10">
          We select only the finest nuts and dried fruits, sourced directly from trusted farms.
          Freshness, quality, and taste are guaranteed in every pack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p>Only the best dry fruits handpicked for you.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Delivered fresh and on time, every time.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p>We prioritize quality service and happy customers.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-green-50 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-green-900">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-green-700 font-bold mb-2">${product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-200 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-900">Get Your Favorite Dry Fruits Today!</h2>
        <Link
          to="/ShopOnline"
          className="bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
