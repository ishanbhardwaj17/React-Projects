import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCart = ({products}) => {
    const { addToCart } = useCart();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
                <div
                    key={product.id}
                    className="bg-gray-900 border border-gray-800 rounded-xl
                         overflow-hidden transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl"
                >
                    {/* Image */}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />

                    {/* Content */}
                    <div className="p-5 space-y-3">
                        <h3 className="text-lg font-semibold text-gray-100">
                            {product.name}
                        </h3>

                        <p className="text-gray-400 font-medium">
                            ₹{product.price}
                        </p>

                        <div className="flex items-center justify-between pt-3">
                            <Link
                                to={`/product/${product.id}`}
                                className="text-sm text-gray-300
                               hover:text-white transition"
                            >
                                View Details →
                            </Link>

                            <button
                                className="px-4 py-2 text-sm rounded-lg
                               bg-gray-100 text-gray-950
                               hover:bg-white transition-all
                               hover:scale-105"
                               onClick={()=>addToCart(product.id)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductCart