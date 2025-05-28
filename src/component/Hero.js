import React from "react";
import heroImage from "../assets/images/SaaS-4.png"; // Replace with your image
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-red-600 font-semibold uppercase text-sm mb-3">
            Expert Academic & Tech Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Professional Writing & IT Services
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            At Shezi Tech Solution, we specialize in academic content writing,
            technical research support, and digital solutions tailored to help
            you achieve excellence.
          </p>
          <Link to={'/services'} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow"
          onClick={() => window.scrollTo(0, 0)}
          
          >
            Explore Our Services
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Academic Services"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
