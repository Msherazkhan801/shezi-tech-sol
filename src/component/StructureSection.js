// src/components/StructureSection.js
import React from 'react';
import dashboardImage from '../assets/images/device.png'; // Replace with your actual image
import { Link } from 'react-router-dom';

const StructureSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={dashboardImage}
            alt="Dashboard Summary"
            className="w-full h-auto rounded-md"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          A Straightforward Structure <br /> for Powerful Digital Results
          </h2>
          <p className="text-gray-600 mb-4">
          Our modern web and SaaS solutions are built with a clean, scalable architecture, ensuring fast performance and seamless user experience across all devices.
          </p>
          <p className="text-gray-600 mb-6">
          From startup websites to enterprise dashboards, our agile development approach delivers robust, responsive designs that drive real results.
          </p>
          <Link to={'/contact'} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-md"
          onClick={() => window.scrollTo(0, 0)}
          
          >
            GET In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
