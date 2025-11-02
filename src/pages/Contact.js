import React from "react";
import contactImage from "../assets/images/contact-image.avif"; // Replace with your image path
import Form from "../component/Forms";
import { FaWhatsapp } from "react-icons/fa"; // ✅ import WhatsApp ico
const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Form Side */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            Get In Touch
          </h1>
         <a
            href="https://wa.me/923472943510"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-green-500 hover:text-green-600 gap-2 mb-4"
          >
            <FaWhatsapp size={28} /> 
            <span className="font-semibold">Chat on WhatsApp</span>
          </a>
          <Form phone subscription />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
