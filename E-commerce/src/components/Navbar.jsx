import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-100 tracking-wide
                       transition-all duration-300
                       hover:text-white hover:scale-105"
          >
            Shop<span className="text-gray-400">Hub</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="relative text-gray-400 font-medium
                         hover:text-gray-100 transition duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1
                         after:h-[2px] after:w-0 after:bg-gray-100
                         hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>

            <Link
              to="/cart"
              className="relative text-gray-400 font-medium
                         hover:text-gray-100 transition duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1
                         after:h-[2px] after:w-0 after:bg-gray-100
                         hover:after:w-full after:transition-all after:duration-300"
            >
              Cart
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/auth"
              className="text-sm font-medium text-gray-400
                         hover:text-gray-100 transition duration-300"
            >
              Login
            </Link>

            <Link
              to="/auth"
              className="px-5 py-2 rounded-lg text-sm font-semibold
                         border border-gray-100 text-gray-100
                         hover:bg-gray-100 hover:text-gray-950
                         transition-all duration-300
                         hover:shadow-md hover:-translate-y-[1px]"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
