// src/components/FeaturesSection.js
import React from 'react';
import { FaChartBar, FaServer, FaObjectGroup, FaChartPie, FaPlayCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartBar className="text-blue-600 text-3xl" />,
    title: 'Data Analytics',
    description: 'The business current account that is your Accounting software. A simple way to run your business',
  },
  {
    icon: <FaServer className="text-blue-600 text-3xl" />,
    title: 'Unlimited Bandwidth',
    description: 'The business current account that is your Accounting software. A simple way to run your business',
  },
  {
    icon: <FaObjectGroup className="text-blue-600 text-3xl" />,
    title: 'Intelligent Chart',
    description: 'The business current account that is your Accounting software. A simple way to run your business',
  },
  {
    icon: <FaChartPie className="text-blue-600 text-3xl" />,
    title: 'Cloud Data Saved',
    description: 'The business current account that is your Accounting software. A simple way to run your business',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <p className="text-red-600 font-bold uppercase text-sm mb-3">Our Features</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 w-2/3">Revolutionize your online business today!</h2>
          <p className="text-gray-600 text-lg mb-6  w-[87%]">
            The business current account that is your Accounting software. A simple way to run your business
          </p>
          <button className="flex items-center gap-2 text-blue-600 hover:underline font-semibold">
            <FaPlayCircle className="text-4xl" />
            Watch Video
          </button>
        </div>

        {/* Right Features Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex  flex-col items-start gap-4">
              {feature.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
