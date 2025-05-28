// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'; // Use your white shezi tech solution logo

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          <Link to="/" className="text-blue-600">
            HOME
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-blue-600">
            ABOUT US
          </Link>
        
          <Link to="/services" className="text-gray-900 hover:text-blue-600">
          OUR SERVICES
          </Link>
          <Link to="/blogs" className="text-gray-900 hover:text-blue-600">
            BLOG
          </Link>
          <Link to="/contact" className="text-gray-900 hover:text-blue-600">
            CONTACT
          </Link>
        </nav>

        {/* Get Quote Button */}
        <div>
          <Link to={'/contact'} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow-md"

          >
            GET In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
