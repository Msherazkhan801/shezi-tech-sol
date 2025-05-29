import React from 'react';
import { FaSmile, FaDesktop, FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup';
import statsImage from "../assets/images/proj-image.jpg"; // Replace with your image path

const stats = [
  {
    icon: <FaSmile className="text-blue-600 text-4xl mb-2" />,
    number: 345,
    label: 'Happy Clients',
  },
  {
    icon: <FaDesktop className="text-blue-600 text-4xl mb-2" />,
    number: 1830,
    label: 'Projects Done',
  },
  {
    icon: <FaTrophy className="text-blue-600 text-4xl mb-2" />,
    number: 155,
    label: 'Total Awards',
  },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-red-600 font-bold uppercase text-sm mb-3">Do More With Emaus</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Over 1200+ completed <br /> projects & still counting.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Use Emaus for free trial without the high costs. For the big companies we offer premium features.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-2xl font-bold text-gray-900">
                  <CountUp start={0} end={item.number} duration={2.5} separator="," />
                </h3>
                <p className="text-gray-600 font-medium uppercase text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img src={statsImage} alt="Project Illustration" className="w-full h-auto"  loading="lazy"/>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
