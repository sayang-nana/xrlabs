import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Section */}
         {/* Left Section */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 w-1/2">
          <img src="/src/assets/MINI.svg" alt="Illustration" className="w-3/4" />
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2 p-6 md:p-12">
          <div className="form-header">
          <Link to="/signup" className="signup-link">Sign up</Link>
          </div>
          <h1 className="text-2xl font-semibold mt-4" id="text">Welcome back!</h1>
          <p className="text-gray-500" id="text-1">Please enter your details</p>
          <form className="mt-6 space-y-4">
            <input className="input-field" type="email" placeholder="Email" required />
            <div className="relative">
              <input
                className="input-field"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
               <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-black text-sm"
                />
              </span>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-500">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="flex justify-center space-x-4 mt-4">
            <button type="button" className="social-button">
              <img src="/src/assets/google-logo.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
            <button type="button" className="social-button">
              <img src="/src/assets/Apple_logo_black.svg" alt="Apple" className="h-5 w-5 mr-2" />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
