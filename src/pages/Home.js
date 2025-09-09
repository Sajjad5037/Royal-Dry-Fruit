import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Royal Dry Fruits</h1>
      <p className="mb-8">Premium quality dry fruits delivered to your doorstep</p>
      <Link
        to="/products"
        className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
