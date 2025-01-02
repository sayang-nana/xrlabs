import React, { useState } from 'react';
import FormInput from "./FormInput";
import Button from "./Button";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignupPage = ({ switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);



  //state declarations here for insert 
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(password === e.target.value);
  };
  


  //backend/////////
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const body = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      };
  
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      const result = await response.json();
      console.log("User added:", result);
  
      // Clear form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword(''); // Reset confirm password as well
    } catch (err) {
      console.error(err.message);
    }
  };
  
  
  
    //over////////
  
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
            <span className="signup-link active">Sign up</span> | <span className="login-link" onClick={switchToLogin}>Log in</span>
          </div>
          <h1 className="text-2xl font-semibold mt-4" id='text'>Create an Account</h1>

             {/* form changes to do */}
          <form className="mt-6 space-y-4" onSubmit={onSubmit}> 
            <div className="flex space-x-4">
              <input className="input-field" type="text" placeholder="First name" required  value={firstName} // Bind to state
  onChange={(e) => setFirstName(e.target.value)} />


              <input className="input-field" type="text" placeholder="Last name" required  value={lastName} // Bind to state
  onChange={(e) => setLastName(e.target.value)}  />


            </div>
            <input className="input-field" type="email" placeholder="Email" required  value={email} // Bind to state
  onChange={(e) => setEmail(e.target.value)}e />  {/* // Update state on chang */}


            <div className="relative">
              <input
                className="input-field"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
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
            <div className="relative">
              <input
                className={`input-field ${!passwordsMatch ? 'border-red-500' : ''}`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  className="text-black text-sm"
                />
              </span>
              {!passwordsMatch && <span className="text-red-500 text-sm">Passwords do not match</span>}
            </div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <button type="submit" className="create-account-button">Create account</button>
          </form>
          <div className="divider">
            <span>or continue with</span>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="social-button">
              <img src="/src/assets/google-logo.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
            <button className="social-button">
            <img src="/src/assets/Apple_logo_black.svg" alt="Apple" className="h-5 w-5 mr-2" />
              Apple
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
