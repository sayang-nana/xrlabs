import React, { useState, useEffect } from "react";
import { FiHome, FiPlusCircle, FiBook, FiSettings, FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import CreateCourse from './CreateCourse';
import MyCourses from './MyCourses';
import Settings from './Settings';
import { RiDashboardFill } from 'react-icons/ri';

export const ContentCreatorDashboard = () => {
  const [currentComponent, setCurrentComponent] = useState('dashboard');
  const [userInfo, setUserInfo] = useState(() => {
    // Load userInfo from localStorage if available
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo ? JSON.parse(savedUserInfo) : {
      name: 'Content Creator',
      email: 'contentCreator@gmail.com',
      password: '********',
      profilePicture: 'https://via.placeholder.com/150' // Default profile picture
    };
  });
  const navigate = useNavigate();

  // Dashboard component
  const DashboardContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h2 className="text-3xl font-bold mb-6">Your Dashboard</h2>
      {/* Dashboard Stats */}
      

    </div>
  );

  // Function to handle logout
  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens)
    navigate('/login'); // Navigate to LoginPage
  };

  // Function to update user info
  const updateUserInfo = (newInfo) => {
    setUserInfo(newInfo);
    localStorage.setItem('userInfo', JSON.stringify(newInfo)); // Update localStorage
  };

  return (
    <div className="flex h-screen bg-white font-poppins font-semibold">
      {/* Left Navigation Bar */}
      <div className="fixed w-[247px] bg-black text-white h-full">
        {/* Logo Area */}
        <div className="flex items-center p-6">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-black">⌖</span>
          </div>
          <span className="ml-2 text-white flex items-center">
            <span className="text-green-500">●</span> Trainer
            <FiHome 
              className="ml-12 w-5 h-5 cursor-pointer hover:text-yellow-500 hover:scale-125 transition-all duration-200"
              onClick={() => navigate('/')}
            />
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-10">
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer mb-[50px] ${
              currentComponent === 'dashboard' ? 'bg-yellow-600' : 'hover:bg-gray-800'
            }`}
            onClick={() => setCurrentComponent('dashboard')}
          >
            <RiDashboardFill className="w-5 h-5 mr-3" />
            <span className="text-white">Dashboard</span>
          </div>

          <div 
            className={`flex items-center px-6 py-3 cursor-pointer mb-[50px] ${
              currentComponent === 'create-course' ? 'bg-yellow-600' : 'hover:bg-gray-800'
            }`}
            onClick={() => setCurrentComponent('create-course')}
          >
            <FiPlusCircle className="w-5 h-5 mr-3" />
            <span className="text-white">Create Course</span>
          </div>

          <div 
            className={`flex items-center px-6 py-3 cursor-pointer mb-[50px] ${
              currentComponent === 'my-courses' ? 'bg-yellow-600' : 'hover:bg-gray-800'
            }`}
            onClick={() => setCurrentComponent('my-courses')}
          >
            <FiBook className="w-5 h-5 mr-3" />
            <span className="text-white">My Courses</span>
          </div>

          <div 
            className={`flex items-center px-6 py-3 cursor-pointer mb-[50px] ${
              currentComponent === 'settings' ? 'bg-yellow-600' : 'hover:bg-gray-800'
            }`}
            onClick={() => setCurrentComponent('settings')}
          >
            <FiSettings className="w-5 h-5 mr-3" />
            <span className="text-white">Settings</span>
          </div>

          {/* Logout at bottom */}
          <div className="absolute bottom-0 w-[247px] border-t border-gray-700">
            <div className="flex items-center px-6 py-3 cursor-pointer hover:bg-gray-800" onClick={handleLogout}>
              <FiLogOut className="w-5 h-5 mr-3" />
              <span className="text-red-500">Logout</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-[247px] bg-white overflow-y-auto px-20 py-6">
        {/* Header */}
        <header className="bg-[#ffc134] rounded-[15px] p-8 flex items-center">
          <div className="w-[260px] h-[200px] bg-gray-200 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={userInfo.profilePicture}
              alt="Profile"
            />
          </div>
          <div className="ml-10 flex justify-between w-full">
            <div>
              <h1 className="text-[40px] font-bold tracking-[-2px]">{userInfo.name}</h1>
              <p className="text-[22px] font-light mt-2">{userInfo.email}</p>
            </div>
            <div>
              <h2 className="text-[50px] font-bold tracking-[-2px] px-[60px]">YOUR DASHBOARD</h2>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="mt-8">
          {currentComponent === 'dashboard' && <DashboardContent />}
          {currentComponent === 'create-course' && <CreateCourse />}
          {currentComponent === 'my-courses' && <MyCourses />}
          {currentComponent === 'settings' && 
            <Settings 
              userInfo={userInfo} 
              updateUserInfo={updateUserInfo} 
            />
          }
        </main>
      </div>
    </div>
  );
};

export default ContentCreatorDashboard;
