import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./components/CourseCard"; // Reuse your existing CourseCard
import NavButton from "./components/NavButton"; // Reuse your existing NavButton
import { courses } from "./data/courseData"; // Reuse your existing courses data

export default function LandingPage() {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="flex flex-col bg-white">
      {/* Header Section */}
      <header className="flex flex-col items-center px-5 pt-7 bg-white fade-in" ref={addToRefs}>
        <nav className="flex justify-between items-center w-full max-w-[1274px]">
          {/* Logo */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/3a21b8a04dbf44e1bd87f9c99615809c/9a85d68a299dbf652639e83aca7528b4c2f03fe9195d4867a888b581656f222f?apiKey=3a21b8a04dbf44e1bd87f9c99615809c&"
            alt="Company logo"
            className="w-[47px] aspect-square"
          />

          {/* Navigation Buttons */}
          <div className="flex gap-9">
            <NavButton path="#home" className="transform transition-transform duration-300 hover:scale-110 text-black">Home</NavButton>
            <NavButton 
              path="#courses" 
              className="transform transition-transform duration-300 hover:scale-110 text-black" 
              onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}
            >
              Courses
            </NavButton>
            <NavButton 
              path="#about-us" 
              className="transform transition-transform duration-300 hover:scale-110 text-black" 
              onClick={() => document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })}
            >
              About Us
            </NavButton>
          </div>

          {/* Search & Login */}
          <div className="flex items-center gap-5">
            <button className="p-2 border rounded-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/3a21b8a04dbf44e1bd87f9c99615809c/bfe4b520ea1da75dbddb2eb1a1a9243824537e162104b8c7014f0ec08838afd3?apiKey=3a21b8a04dbf44e1bd87f9c99615809c&"
                alt="Search"
                className="w-5"
              />
            </button>
            <button
              className="text-black transform transition-transform duration-300 hover:scale-110 rounded-full border-2 border-black px-8 py-3"
              onClick={() => navigate("/LoginPage")}
            >
              Login
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-start py-16 text-start">
          <div className="flex items-center">
            <h1 className="text-9xl font-extrabold text-black flex flex-col">
              <span className="self-end" style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}>Visualize</span>
              <span className="text-yellow-500 self-end mr-[0.5em]" style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}>&</span>
              <span className="self-end relative" style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}>
                Learn
                <h5 className="text-gray-700 text-sm absolute left-[8em] top-full mt-1">
                  Education is the kindling of a flame, not the filling of a vessel.{" "}
                  <span className="italic">- Socrates</span>
                </h5>
              </span>
            </h1>
            <img src="src/assets/Hero.png" alt="Hero" className="ml-4" />
          </div>
          <button className="mt-2 px-6 py-3 bg-yellow-500 text-white rounded-lg">
            Get Started
          </button>
        </section>
      </header>

      {/* Step Into the Future Section */}
      <section className="bg-black text-white py-1 fade-in" ref={addToRefs}>
        <div className="flex flex-wrap justify-center gap-5 text-center">
          {[".step .", ".in .", ".the .", ".future"].map((text, index) => (
            <h2
              key={index}
              className="text-9xl font-bold lowercase tracking-normal whitespace-nowrap"
            >
              {text}
            </h2>
          ))}
        </div>

        {/* Centered Image */}
        <div className="flex justify-center">
          <img src="src/assets/astro.png" alt="Astro" />
        </div>

        {/* Description */}
       <p className="text-center mt-8 text-xl mx-auto text-white font-bold">
          "Experience immersive and interactive learning anytime, anywhere—on
          laptops, tablets, <br />and smartphones."
        </p> 

        {/* Info Boxes */}
        <div className="flex justify-around mt-10 text-center text-lg">
          <div className="flex-1 px-5 text-white text-center mb-5">
            Hands-on exploration with<br />engaging 3D models across<br /> diverse
            subjects.
          </div>
          <div className="flex-1 px-5 text-white text-center mb-5">
            Delivering realistic and engaging <br />learning environments that bring <br />
            education to life through interactive <br />experiences.
          </div>
          <div className="flex-1 px-5 text-white text-center">
            Creating captivating and <br />immersive educational spaces <br />that transform
            the way you <br />learn and explore.
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-5 fade-in" ref={addToRefs}>
        <h2 className="text-4xl font-bold text-center mb-10 border-yellow-500 bg-black text-yellow-500 px-16 py-4 w-fit mx-auto rounded-xl">Courses</h2>
        <div className="flex flex-nowrap gap-10 justify-center">
          {courses.slice(0, 3).map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              status={course.status}
              image={course.image}
              iconSrc={course.iconSrc}
              showOverlay={index === 0 || index === 1 || index === 2}
              className="w-1/4 transition-transform transform hover:scale-105 fade-in" ref={addToRefs}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <footer ref={addToRefs} id="about-us" className="fade-in bg-black text-white py-16 px-10 text-center">
        <div className="bg-black text-white py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Section: Image/Graphic */}
            <div className="flex-1 mb-8 lg:mb-0 h-full">
              <img
                src="src/assets/footerImage.png" // Replace with actual graphic URL
                alt="Graphic"
                className="w-1/2 h-auto object-cover"
              />
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block w-px bg-white mx-4 h-full"></div>

            {/* Right Section: About Us Content */}
            <div className="flex-1">
              <h2 className="text-yellow-400 text-5xl font-bold mb-4">About us</h2>
              <p className="text-gray-300 text-2xl mb-4 text-left">
                We are Third Year Students pursuing Bachelors <br className="inline" />in Computer Application (B.C.A).
              </p>
              <p className="text-gray-300 text-2xl mb-4 text-left">
                This is a Web-Based Gamified Learning System <br className="inline" />using WebXR and Web 3D.
              </p>
              <p className="text-gray-300 text-2xl mb-4 text-left">
                It focuses on taking the traditional method of Teaching <br className="inline" />to the next level by making it Interactive and Immersive <br className="inline" />using 3D models and Virtual Environment.
              </p>

              {/* Footer Links */}
              <div className="flex mt-6 space-x-4 justify-end">
                <a
                  href="#"
                  className="text-blue-500 text-2xl hover:text-blue-400 transition"
                >
                  <img 
                    src="src\assets\Facebook logo.png" 
                    alt="Facebook" 
                    className="w-8 h-8 transition-transform transform hover:scale-110" />
                </a>
                <a
                  href="#"
                  className="text-pink-500 text-2xl hover:text-pink-400 transition"
                >
                  <img 
                    src="src\assets\Instagram.png" 
                    alt="Instagram" 
                    className="w-8 h-8 transition-transform transform hover:scale-110" />
                </a>
              </div>

              {/* Copyright */}
              <div className="mt-10 text-gray-500 text-sm">
                © 2024, All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
