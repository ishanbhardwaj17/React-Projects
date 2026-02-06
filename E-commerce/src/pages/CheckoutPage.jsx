import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { getProductById } from '../data/products'
import { useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postal: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const total = cartItems.reduce((sum, item) => {
    const product = getProductById(item.id)
    return sum + (product?.price || 0) * item.quantity
  }, 0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setOrderPlaced(true)
    clearCart()
    setIsSubmitting(false)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Checkout</h1>
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

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-400 mb-8">Thank you for your order. You will receive a confirmation email shortly.</p>
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

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                             text-gray-100 placeholder-gray-500 focus:outline-none
                             focus:ring-2 focus:ring-gray-600 mb-4"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                  <input
                    type="text"
                    name="postal"
                    placeholder="Postal Code"
                    required
                    value={formData.postal}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                </div>
              </div>

              {/* Payment */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  required
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                             text-gray-100 placeholder-gray-500 focus:outline-none
                             focus:ring-2 focus:ring-gray-600 mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    required
                    value={formData.cvv}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2
                               text-gray-100 placeholder-gray-500 focus:outline-none
                               focus:ring-2 focus:ring-gray-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gray-100 text-gray-950 rounded-lg
                           hover:bg-white transition font-medium disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-20">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map(item => {
                  const product = getProductById(item.id)
                  if (!product) return null

                  return (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        {product.name} x {item.quantity}
                      </span>
                      <span>₹{(product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  )
                })}
              </div>

              <div className="border-t border-gray-800 pt-4 space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-800">
                  <span>Total:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage