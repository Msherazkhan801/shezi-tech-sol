// src/components/StructureSection.js
import React from 'react';
import dashboardImage from '../assets/images/device.png'; // Replace with your actual image

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
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            A Straight Forward Structure <br /> for Powerful Results
          </h2>
          <p className="text-gray-600 mb-4">
            Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking return investment alpha. Marketing pitch gen scrum project.
          </p>
          <p className="text-gray-600 mb-6">
            Responsive web design. Agile development innovator termsheet is users interface pitch scrum project research & development. Get Started
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-md">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
