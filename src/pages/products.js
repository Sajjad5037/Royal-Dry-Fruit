import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Almonds", price: 12.99 },
  { id: 2, name: "Cashews", price: 14.99 },
  { id: 3, name: "Walnuts", price: 16.99 },
];

const Products = () => {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-md p-5 shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="my-2">${product.price}</p>
          <Link
            to={`/products/${product.id}`}
            className="text-green-700 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
