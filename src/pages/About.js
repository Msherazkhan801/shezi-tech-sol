import React from "react";
import dashboardImage from '../assets/images/device.png'; // Replace with your actual image


const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={dashboardImage} // Replace with your image path
              alt="Shezi Tech Solution Team"
              className="rounded-lg shadow-lg object-cover w-full h-[350px] md:h-[400px]"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Shezi Tech Solution</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Shezi Tech Solution is a forward-thinking technology company dedicated to delivering innovative software
              solutions tailored to your business needs. Our expert team specializes in full-stack web development,
              mobile applications, and custom software design  combining creativity with technical excellence.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We strive to empower businesses through technology, providing scalable and efficient digital products
              that drive growth and success. At Shezi Tech Solution, we believe in building long-term partnerships by
              understanding our clients’ goals and delivering solutions that exceed expectations.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Join us on a journey of innovation and excellence, and let’s transform your ideas into impactful digital experiences.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;
