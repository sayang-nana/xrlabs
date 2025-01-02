import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { Plants } from './components/Plants';
import { CoursePage } from './components/CoursePage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/coursepage" element={<CoursePage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
