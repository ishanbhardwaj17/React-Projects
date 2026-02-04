import React from 'react'
import { getProducts } from '../data/products'
import { Link } from 'react-router-dom'
import ProductCart from '../components/ProductCart'

const HomePage = () => {
  const products = getProducts()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* Hero Section */}
      <div className="text-center py-16 border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-gray-300">ShopHub</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Discover amazing products at minimal cost
        </p>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8 border-l-4 border-gray-400 pl-4">
          Our Products
        </h2>

        <ProductCart products={products} />

      </div>
    </div>
  )
}

export default HomePage
