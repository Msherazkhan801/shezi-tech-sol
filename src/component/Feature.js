import React, { useState } from 'react';
import { FaCode, FaLink, FaBook, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import Modal from './Modal';

const features = [
  {
    icon: <FaCode className="text-blue-600 text-3xl" />,
    title: 'Custom Web Development Services',
    description: 'Get scalable, SEO-friendly, and mobile-optimized websites built using modern tech stacks like React and Node.js for better online visibility.',
  },
  {
    icon: <FaLink className="text-blue-600 text-3xl" />,
    title: 'High-Authority Link Building',
    description: 'Improve your website’s Google ranking with white-hat link-building strategies, outreach, and backlink audits for sustainable SEO growth.',
  },
  {
    icon: <FaBook className="text-blue-600 text-3xl" />,
    title: 'Academic & Research Writing',
    description: 'Access expert academic content writing for theses, essays, and technical papers with plagiarism-free guarantees and deep research.',
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    title: 'Software QA & Testing Solutions',
    description: 'Ensure bug-free releases with end-to-end manual and automated testing services that enhance product quality, speed, and performance.',
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
          <h2
            id="features-heading"
            className="text-3xl font-extrabold text-gray-900 mb-4 w-2/3"
          >
            Revolutionize Your Online Business with Smart Digital Solutions
          </h2>
          <p className="text-gray-600 text-lg mb-6 w-[87%]">
            From custom websites and SEO to academic support and quality assurance, we empower your digital presence.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-blue-600 hover:underline font-semibold"
            aria-label="Watch company introduction video"
          >
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
