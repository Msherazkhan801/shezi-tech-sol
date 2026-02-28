import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/SaaS-4.webp"; // Replace with your image
import { 
  FaPenAlt, 
  FaCode, 
  FaChartLine, 
  FaRocket,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const Hero = () => {
  const controls = useAnimation();
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    "Academic Writing",
    "SaaS Development",
    "Technical Research",
    "Full-Stack Solutions"
  ];

  // Rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Animate on mount
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0, rotateY: 20 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      y: -10,
      rotateY: 5,
      transition: { duration: 0.3 }
    }
  };

  const serviceIconVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs md:text-sm font-semibold uppercase py-2 px-4 rounded-full mb-6 shadow-lg"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Academic Writing & IT Development Services
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              <span className="block mb-2">Custom</span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {services[currentService]}
                </span>
                <motion.span
                  key={currentService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {services[currentService]}
                </motion.span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </span>
              <span className="block mt-2">Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              Shezi Tech Solution offers professional academic writing services, 
              technical research support, and end-to-end software development 
              for startups, students, and enterprises.
            </motion.p>

            {/* Feature Points */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {[
                { icon: <FaPenAlt />, text: "Thesis & Research Papers" },
                { icon: <FaCode />, text: "Custom SaaS Development" },
                { icon: <FaChartLine />, text: "Technical Research Support" },
                { icon: <FaRocket />, text: "Startup MVP Development" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                  whileHover="hover"
                >
                  <motion.div
                    variants={serviceIconVariants}
                    className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors"
                  >
                    <FaCheckCircle className="text-blue-600 text-lg" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Services
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
               to="/blogs"
                 onClick={() => window.scrollTo(0, 0)}
                className="group border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free Blogs
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="relative">
              {/* Floating elements around image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-200"
              >
                <FaPenAlt className="text-3xl text-blue-600" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-200"
              >
                <FaCode className="text-3xl text-purple-600" />
              </motion.div>

              {/* Main Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  src={heroImage}
                  alt="Academic & Development Services"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border-8 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-8 left-1/4 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm flex flex-col items-center"
          >
            <span>Scroll to explore</span>
            <div className="mt-2 w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;