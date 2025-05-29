// src/components/CallToActionSection.js
import React from 'react';
import bg from '../assets/images/call-to-action-bg.png'; // Make sure image is in src/assets
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white text-center py-28 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="cta-heading" className="text-4xl font-bold mb-6 mt-20"> Manage Any Project with <span className="text-blue-300">Shezi Tech Solution</span></h2>
        <p className="text-lg text-white/90 mb-8">
        Optimize your project performance with our expert digital solutions. Stay ahead, stay organized,
        and elevate your workflow with our full-suite services.
        </p>
        <Link to='/services' className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
          onClick={() => window.scrollTo(0, 0)}
        >
         Explore Our Projects
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
