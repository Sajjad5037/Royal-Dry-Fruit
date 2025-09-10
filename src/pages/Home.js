import React from "react";
import { Link } from "react-router-dom";
import { Star, Truck, Smile } from "lucide-react"; // icons

// Sample featured products
const featuredProducts = [
  { id: 1, name: "Almonds", price: 12.99, image: "/images/almonds.jpg" },
  { id: 2, name: "Cashews", price: 14.99, image: "/images/cashews.jpg" },
  { id: 3, name: "Walnuts", price: 16.99, image: "/images/walnuts.jpg" },
];

const Home = () => {
  return (
    <div className="bg-yellow-50 min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/cover_photo.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Royal Dry Fruits
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium quality dry fruits delivered fresh to your doorstep.
          </p>
          <Link
            to="/ShopOnline"
            className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-900">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Star className="mx-auto text-green-700 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Only the finest nuts and dried fruits sourced from trusted farms.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Truck className="mx-auto text-green-700 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Freshness guaranteed with on-time delivery across your city.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Smile className="mx-auto text-green-700 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">
              We value our customers and ensure a delightful shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-green-50 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-900">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-green-700 font-bold mb-4">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-200 to-green-300 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
          Get Your Favorite Dry Fruits Today!
        </h2>
        <Link
          to="/ShopOnline"
          className="bg-green-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
