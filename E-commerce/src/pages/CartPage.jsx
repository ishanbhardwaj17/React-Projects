import React from 'react'
import { useCart } from '../context/CartContext'
import { getProductById } from '../data/products'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
          <p className="text-gray-400 mb-8">Your cart is empty</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-100 text-gray-950 rounded-lg
                       hover:bg-white transition font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  const total = cartItems.reduce((sum, item) => {
    const product = getProductById(item.id)
    return sum + (product?.price || 0) * item.quantity
  }, 0)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {cartItems.map((item) => {
            const product = getProductById(item.id)
            if (!product) return null

            return (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6
                           flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-400">₹{product.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 hover:bg-gray-700 rounded transition"
                    >
                      −
                    </button>
                    <span className="px-4 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-gray-700 rounded transition"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-gray-300 font-semibold w-20 text-right">
                    ₹{(product.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-900/50 text-red-400
                               hover:bg-red-900 transition rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="border-t border-gray-800 pt-4 flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className="w-full px-6 py-3 bg-gray-100 text-gray-950 rounded-lg
                       hover:bg-white transition font-medium font-bold"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage