import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <Link to='/' className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
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
          <Link to="/career" className="text-gray-900 hover:text-blue-600">
            CAREER
          </Link>
          <Link to="/contact" className="text-gray-900 hover:text-blue-600">
            CONTACT
          </Link>
        </nav>

        {/* Get Quote Button */}
        <div className="hidden md:block">
          <Link
            to={'/contact'}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow-md"
          >
            GET In Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-gray-900 font-semibold">
            <li>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                OUR SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-blue-600 text-white text-center rounded py-2 font-semibold hover:bg-blue-700"
              >
                GET In Touch
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
