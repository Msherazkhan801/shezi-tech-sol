import React from "react";
import contactImage from "../assets/images/contact-image.avif"; // Replace with your image path
import Form from "../component/Forms";

const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Side */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            Get In Touch
          </h1>
          <Form phone subscription />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
