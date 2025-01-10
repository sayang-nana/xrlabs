import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    setForgotPasswordOpen(true);
    setSubmitted(false); // Reset form state
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate('/content-creator-dashboard'); // Navigate to ContentCreatorDashboard
  };

  const navigateToLearnerDashboard = () => {
    navigate('/learner-dashboard'); // Replace with your actual route
  };

  return (
    <div className="login-container bg-white relative">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 w-1/2">
          <img src="/src/assets/MINI.svg" alt="Illustration" className="w-3/4" />
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2 p-6 md:p-12">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="/src/assets/homeIcon.svg" alt="Home" className="inline-block h-4 w-4 mr-0" />
            </Link>
            <div className="absolute top-6 right-6">
              <button
                onClick={navigateToLearnerDashboard}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Learner Dashboard
              </button>
            </div>
          </div>
          <div className="form-header">
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </div>
          <h1 className="text-2xl font-semibold mt-4 text-black" id="text">
            Welcome back!
          </h1>
          <p className="text-gray-500" id="text-1">
            Please enter your details
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              className="input-field border-2 border-black shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.2)] hover:shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.7),inset_6px_6px_12px_rgba(0,0,0,0.3)]"
              type="email"
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="input-field border-2 border-black shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.2)] hover:shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.7),inset_6px_6px_12px_rgba(0,0,0,0.3)]"
                type={showPassword ? 'text' : 'password'}
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
            <div className="flex justify-end items-center">
              <a
                href="#"
                className="text-blue-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleForgotPasswordClick();
                }}
              >
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-button bg-yellow-500 text-white">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {isForgotPasswordOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
            {!isSubmitted ? (
              <form onSubmit={handleForgotPasswordSubmit}>
                <p className="text-gray-700 mb-4">Enter your email to reset your password:</p>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field w-full border-2 border-black shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.7),inset_4px_4px_8px_rgba(0,0,0,0.2)] hover:shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.7),inset_6px_6px_12px_rgba(0,0,0,0.3)] px-4 py-2"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-3 rounded-full w-1/3 text-center hover:bg-black"
                  >
                    Submit
                    </button>
                    </div>

              </form>
            ) : (
              <p className="text-black font-medium">
                A link to reset your password has been sent to "{email}".
              </p>
            )}
            <button
              onClick={() => setForgotPasswordOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
