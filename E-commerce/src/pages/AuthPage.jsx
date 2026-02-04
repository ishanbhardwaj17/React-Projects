import React, { useState } from 'react';

const AuthPage = () => {
  const [mode, setMode] = useState("signup");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-8">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-100 mb-6">
          {mode === "signup" ? "Create an Account" : "Login to Your Account"}
        </h2>

        {/* Form */}
        <form>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 bg-gray-800 text-gray-100
                         border border-gray-700 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 bg-gray-800 text-gray-100
                         border border-gray-700 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-100 text-gray-950 py-2 rounded-md
                       hover:bg-white transition duration-300 font-medium"
          >
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-4 text-sm text-gray-400">
          {mode === "signup" ? (
            <p>
              Already have an account?{" "}
              <span
                className="cursor-pointer text-gray-200 hover:underline"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don&apos;t have an account?{" "}
              <span
                className="cursor-pointer text-gray-200 hover:underline"
                onClick={() => setMode("signup")}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
