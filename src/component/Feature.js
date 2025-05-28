import React, { useState } from 'react';
import { FaCode, FaLink, FaBook, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import Modal from './Modal';

const features = [
  {
    icon: <FaCode className="text-blue-600 text-3xl" />,
    title: 'Web Development',
    description: 'Crafting responsive and high-performance websites tailored to your business needs with the latest technologies.',
  },
  {
    icon: <FaLink className="text-blue-600 text-3xl" />,
    title: 'Link Building',
    description: 'Boost your website’s SEO and online presence through strategic, high-quality backlink acquisition.',
  },
  {
    icon: <FaBook className="text-blue-600 text-3xl" />,
    title: 'Academic Writing',
    description: 'Professional academic writing services ensuring well-researched, original, and plagiarism-free papers.',
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    title: 'Quality Assurance',
    description: 'Comprehensive QA services to ensure your software is reliable, bug-free, and meets the highest standards.',
  },
];

const FeaturesSection = () => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <p className="text-red-600 font-bold uppercase text-sm mb-3">Our Features</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 w-2/3">
            Revolutionize your online business today!
          </h2>
          <p className="text-gray-600 text-lg mb-6 w-[87%]">
            The business current account that is your Accounting software. A simple way to run your business
          </p>
          <button onClick={()=>setIsOpen(true)} className="flex items-center gap-2 text-blue-600 hover:underline font-semibold">
            <FaPlayCircle className="text-4xl" />
            Watch Video
          </button>
        </div>

        {/* Right Features Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              {feature.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
  <Modal
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="Watch Our Video"
  >
    {/* Put your video or content here */}
    <div className="aspect-w-16 aspect-h-16 w-full h-[500px] ">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  </Modal>
)}
    </section>
  );
};

export default FeaturesSection;
