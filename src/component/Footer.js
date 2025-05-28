// src/components/Footer.js
import React from 'react';
import Logo from '../assets/images/logo.png'; // Use your white shezi tech solution logo
import SubscriptionForm from './Subcribr';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1d1f23] text-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <img src={Logo} alt="shezi tech solution" className="h-10 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Building your own home is about desire, fantasy. But it’s achievable — anyone can do it.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Headquarters */}
        <div>
          <h4 className="font-semibold text-white mb-4">Headquaters</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            962 Fifth Avenue, 3rd Floor <br /> New York, NY10022
          </p>
          <p className="text-sm text-gray-300 mt-2">Hello@TeamXcel.net</p>
          <p className="text-sm text-gray-300">(+123) 456 789 101</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-4">Newsletter Subscription</h4>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe and get 10% off from our architecture company.
          </p>
          <div className="flex">
         <SubscriptionForm/>
         
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-400 text-sm">
        © 2019 shezi tech solution Powered by TeamXcel
      </div>
    </footer>
  );
};

export default Footer;
