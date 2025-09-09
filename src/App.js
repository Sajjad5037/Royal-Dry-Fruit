import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';

import WhyAnzWay from './pages/WhyAnzWay';

function App() {
  return (
    <Router>
      
      {/* Navbar with white background */}
      <div className="bg-white text-primary">
        <Navbar />
      </div>


      {/* Main content area with light purple background */}
      <div className="bg-lightPurple min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Why_Anz_Way" element={<WhyAnzWay />} />
        </Routes>
      </div>

      {/* Footer with dark purple background */}
      <div className="bg-secondary text-white">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
