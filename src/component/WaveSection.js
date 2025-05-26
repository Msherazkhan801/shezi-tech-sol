// src/components/CallToActionSection.js
import React from 'react';
import bg from '../assets/images/call-to-action-bg.png'; // Make sure image is in src/assets

const CallToActionSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white text-center py-28 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 mt-20">Manage any Projects with Shezi Tech Solution</h2>
        <p className="text-lg text-white/90 mb-8">
          We combine practice of managing and analyzing project management to its full performance
          and maximize its effectiveness and stay on top of everything.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100">
          START FREE TRIAL
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
