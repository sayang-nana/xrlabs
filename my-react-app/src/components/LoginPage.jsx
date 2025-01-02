import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = ({ switchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(`Login successful! Welcome, ${data.user.first_name}!`);
        console.log("Server Response:", data);
      } else {
        alert(data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while logging in. Please try again later.");
    }
  };
  

  //over////

  return (
    <div className="login-container">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 w-1/2">
          <img src="/src/assets/MINI.svg" alt="Illustration" className="w-3/4" />
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2 p-6 md:p-12">
          <div className="form-header">
            <span className="signup-link" onClick={switchToSignup}>Sign up</span> | <span className="login-link active">Log in</span>
          </div>
          <h1 className="text-2xl font-semibold mt-4" id="text">Welcome back!</h1>
          <p className="text-gray-500" id="text-1">Please enter your details</p>
          <form className="mt-6 space-y-4"  onSubmit={handleLogin}>
            <input className="input-field" type="email" placeholder="Email" required value={email}
  onChange={(e) => setEmail(e.target.value)} />


            <div className="relative">
              <input
                className="input-field"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
  onChange={(e) => setPassword(e.target.value)}
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
