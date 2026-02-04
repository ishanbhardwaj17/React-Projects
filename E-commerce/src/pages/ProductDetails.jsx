import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = getProductById(Number(id));

    if (!fetchedProduct) {
      navigate("/");
      return;
    }

    setProduct(fetchedProduct);
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-2xl font-semibold text-gray-300">
            ₹{product.price}
          </p>

          <p className="text-gray-400 leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button
              className="px-6 py-3 bg-gray-100 text-gray-950 rounded-lg
                         hover:bg-white transition font-medium"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-gray-700 rounded-lg
                         text-gray-300 hover:text-white hover:border-gray-500
                         transition"
            >
              Go Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
