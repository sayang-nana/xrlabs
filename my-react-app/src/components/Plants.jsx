import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ginsengImage from '../plantsAssets/Ginseng.svg';
import garlicImage from '../plantsAssets/Garlic.svg';
import AloeveraImage from '../plantsAssets/Aloevera.svg';
import backArrow from '../assets/HomeButton.svg';



export const Plants = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedCourse(null);
  };

  const handleEnroll = () => {
    navigate('/coursepage');
  };

  const courses = [
    { title: 'Aloevera', description: 'Learn about the benefits and uses of Aloevera.', navigate: true },
    { title: 'Garlic', description: 'Discover the health benefits of Garlic.', navigate: false },
    { title: 'Ginseng', description: 'Explore the properties of Ginseng.', navigate: false },
  ];

  return (
    <div className="flex flex-row justify-center w-full bg-white">
      <div className="relative w-[1440px] h-[2000px] bg-white" style={{ top: '0' }}>
        <div className="absolute top-0 left-0 w-[1426px] h-[824px]">
          <div className="absolute top-0 left-0 w-full h-[calc(100vh-<desired_offset>)]">
            <img
              className="w-[1500px] h-[700px] object-fill"
              alt="Close up bunch green"
              src="src/plantsAssets/FloraHero.svg"
            />
          </div>

          <div className="absolute top-[640px] left-[1050px] w-[321px] h-[68px]">
            <button
              className="relative w-[260px] h-[55px] bg-white border border-black rounded-full shadow-md flex items-center justify-between px-4 hover:scale-105 transition-transform duration-200"
              onClick={() => {
                document.getElementById('#').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="text-[#3D7649] font-bold text-[25px]">
                Start Learning
              </div>
              <div className="flex items-center justify-center w-12 h-[35px] border-2 border-black rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </button>
          </div>

          <div className="absolute top-[30px] left-[160px] w-[60px] h-[60px]">
            <div 
              className="relative hover:scale-110 transition-transform duration-200"
            >
              <div className="absolute top-[9px] left-[9px] w-[42px] h-[42px] bg-white rounded-[21.24px] shadow-md transform rotate-[132.27deg]"></div>
              <img
                className="absolute top-[4px] left-[5px] w-[75px] h-[54px]"
                alt="Back Arrow"
                src={backArrow}
              />
            </div>
          </div>

          <div className="absolute top-[190px] left-[292px] text-white text-[250px] font-light leading-normal" style={{ fontFamily: 'Aboreto, sans-serif' }}>
            Flora
          </div>

          <button 
            className="absolute top-[30px] left-[350px] px-5 py-4 whitespace-nowrap border-2 border-black border-solid bg-zinc-50 rounded-[100px] text-xs text-black transform transition-transform duration-300 hover:scale-110"
            onClick={() => navigate('/#hero')}
          >
            Home
          </button>

          <button 
            className="absolute top-[30px] left-[454px] px-5 py-4 whitespace-nowrap border-2 border-black border-solid bg-zinc-50 rounded-[100px] text-xs text-black transform transition-transform duration-300 hover:scale-110"
            onClick={() => navigate('/#courses')}
            >
            Courses
          </button>

          <button 
            className="absolute top-[30px] left-[562px] px-5 py-4 whitespace-nowrap border-2 border-black border-solid bg-zinc-50 rounded-[100px] text-xs text-black transform transition-transform duration-300 hover:scale-110"
            onClick={() => navigate('/#about')}
            >
            About Us
          </button>
        </div>

        <div id="categories-section" className="absolute top-[760px] left-[70px] w-full">
          <div className="text-left text-black text-[120px] font-semibold mb-4">
            Categories
          </div>
          <div className="flex justify-start space-x-4 mb-8">
            <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
              Herbs
            </button>
            <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
              Shrubs
            </button>
            <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
              Trees
            </button>
            <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
              Climbers
            </button>
          </div>

          {/* Plant Cards */}
          <div className="mt-12 flex space-x-4">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="relative w-[273px] h-[374px] bg-cover hover:w-[692px] transition-all duration-300 rounded-[14px]"
                onClick={() => handleCardClick(course)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[14px]"
                  alt={course.title}
                  src={index === 0 ? AloeveraImage : index === 1 ? garlicImage : ginsengImage}
                />
                <div className="absolute top-0 left-0 text-white text-[64px] font-normal">
                  {course.title}
                </div>
              </div>
            ))}

            {/* Popup for selected course */}
            {isPopupOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
                  <p className="mb-4">{selectedCourse.description}</p>
                  {selectedCourse.navigate ? (
                    <button 
                      onClick={handleEnroll} 
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Enroll Course
                    </button>
                  ) : (
                    <button 
                      onClick={handleClosePopup} 
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Enroll Course
                    </button>
                  )}
                  <button 
                    onClick={handleClosePopup} 
                    className="ml-2 text-gray-500 hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-[1550px] left-[9px] w-[1422px] h-[440px]">
          <div className="relative w-[1418px] h-[440px] bg-[url('https://cdn.animaapp.com/projects/66fe7ba2df054d0dfb35274e/releases/676d6d16be8aa405f53530bc/img/hd-wallpaper-anatomy-human-anatomy-1.png')] bg-cover">
            <div className="absolute top-[252px] left-[23px] w-[1374px] h-[178px] bg-white rounded-[12px]">
              <div className="flex justify-center space-x-4 mt-4">
              <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 hover:text-white hover:scale-105 transition duration-200">
                  Instagram
                </button>
                  <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
                    Twitter
                  </button>
                  <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-200">
                    Facebook
                  </button>
                  <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-red-500 hover:text-white hover:scale-105 transition duration-200">
                    Pinterest
                    </button>
              </div>

              <div className="mt-4 border-t border-gray-300"></div>

              <div className="text-center mt-2">
                <p className="text-xl text-gray-800">© 2024, All Rights Reserved</p>
              </div>
            </div>

            <p className="absolute top-[40px] left-[363px] text-[64px] font-normal text-center text-white">
            Be the one with
              <span className="text-red-500"> Nat</span>
              <span className="text-[#B9DE00]">ur</span>
              <span className="text-red-500">e</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

