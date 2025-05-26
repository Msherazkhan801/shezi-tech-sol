// src/components/PricingSection.js
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    badge: 'Best Choice',
    price: '$49',
    period: 'Monthly',
    name: 'Basic Plan',
    features: [
      'Power And Predictive Dialing',
      'Quality & Customer Experience',
      '24/7 phone and email support',
    ],
    isPrimary: true,
  },
  {
    badge: 'Risk Free',
    price: '$39',
    period: 'Monthly',
    name: 'Standard Plan',
    features: [
      'Power And Predictive Dialing',
      'Customer Experience',
    ],
    isPrimary: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Intro */}
        <div className="md:w-1/3">
          <p className="text-red-600 font-semibold uppercase mb-3">Smart Contacts</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Best Results <br /> & Reliability
          </h2>
          <p className="text-gray-600">
            Choose a suitable package for your website and join innovative minds
          </p>
        </div>

        {/* Right Plans */}
        <div className="md:w-2/3 flex flex-col sm:flex-row gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg flex-1 ${
                plan.isPrimary ? 'border-2 border-blue-600' : 'border border-gray-200'
              }`}
            >
              <p className="text-sm text-pink-600 font-bold uppercase mb-2">{plan.badge}</p>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">{plan.price}</div>
              <p className="uppercase text-pink-500 text-sm mb-4">{plan.period}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{plan.name}</h3>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full py-3 rounded shadow">
                PURCHASE PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
