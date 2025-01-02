import React from 'react';
import { useNavigate } from 'react-router-dom';
import ginsengImage from '../plantsAssets/Ginseng.svg';
import garlicImage from '../plantsAssets/Garlic.svg';
import AloeveraImage from '../plantsAssets/Aloevera.svg';
import backArrow from '../assets/HomeButton.svg';



export const Plants = () => {
  const navigate = useNavigate();

  const handleAloeVeraClick = () => {
    navigate('/coursepage');
  };

  return (
    <div className="flex flex-row justify-center w-full bg-white">
      <div className="relative w-[1440px] h-[2399px] bg-white" style={{ top: '0' }}>
        <div className="absolute top-0 left-0 w-[1426px] h-[824px]">
          <div className="absolute top-0 left-0 w-[1424px] h-[824px]">
            <img
              className="w-[1432px] h-[960px] top-0 left-0 object-cover"
              alt="Close up bunch green"
              src="src\plantsAssets\florahero.png"
            />
          </div>

          <div className="absolute top-[873px] left-[1105px] w-[321px] h-[68px]">
            <button
              className="relative w-full h-full bg-white border border-black rounded-full shadow-md flex items-center justify-between px-4 hover:scale-105 transition-transform duration-200"
              onClick={() => {
                document.getElementById('categories-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="text-[#3D7649] font-bold text-[33px]">
                Start Learning
              </div>
              <div className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full">
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

          <div className="absolute top-[18px] left-[18px] w-[60px] h-[60px]">
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

          <div className="absolute top-[294px] left-[292px] text-white text-[250px] font-light leading-normal text-center" style={{ fontFamily: 'Aboreto, sans-serif' }}>
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

        <div id="categories-section" className="absolute top-[1034px] left-[70px] w-full">
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
            {/* Aloe Vera Card */}
            <div 
              className="relative w-[273px] h-[374px] bg-cover hover:w-[692px] transition-all duration-300 rounded-[14px]"
              onClick={handleAloeVeraClick}
              style={{ cursor: 'pointer' }}
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[14px]"
                alt="Aloevera"
                src={AloeveraImage}
              />
              <div className="absolute top-0 left-0 text-white text-[64px] font-normal">
                Aloevera
              </div>
            </div>

            {/* Garlic Card */}
            <div 
              className="relative w-[273px] h-[374px] bg-cover hover:w-[692px] transition-all duration-300 rounded-[14px]"
              style={{ cursor: 'pointer' }}
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[14px]"
                alt="Garlic"
                src={garlicImage}
              />
              <div className="absolute top-0 left-0 text-white text-[64px] font-normal">
                Garlic
              </div>
            </div>

            {/* Ginseng Card */}
            <div 
              className="relative w-[273px] h-[374px] bg-cover hover:w-[692px] transition-all duration-300 rounded-[14px]"
              style={{ cursor: 'pointer' }}
            >
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[14px]"
                alt="Ginseng"
                src={ginsengImage}
              />
              <div className="absolute top-0 left-0 text-white text-[64px] font-normal">
                Ginseng
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[1950px] left-[9px] w-[1422px] h-[440px]">
          <div className="relative w-[1418px] h-[440px] bg-[url('https://cdn.animaapp.com/projects/66fe7ba2df054d0dfb35274e/releases/676d6d16be8aa405f53530bc/img/hd-wallpaper-anatomy-human-anatomy-1.png')] bg-cover">
            <div className="absolute top-[252px] left-[23px] w-[1374px] h-[178px] bg-white rounded-[12px]">
              <div className="flex justify-center space-x-4 mt-4">
                <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
                  Instagram
                </button>
                <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
                  Twitter
                </button>
                <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
                  Facebook
                </button>
                <button className="w-48 h-11 bg-white border border-black rounded-full hover:bg-black hover:text-white hover:scale-105 transition duration-200">
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

