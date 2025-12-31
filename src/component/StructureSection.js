import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import dashboardImage from "../assets/images/device.png";
import {
  FaLayerGroup,
  FaRocket,
  FaMobileAlt,
  FaServer,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const StructureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.6 } },
  };

  const features = [
    { icon: <FaLayerGroup />, text: "Clean Architecture" },
    { icon: <FaBolt />, text: "Fast Performance" },
    { icon: <FaMobileAlt />, text: "Responsive Design" },
    { icon: <FaServer />, text: "Scalable Solutions" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-0 w-56 h-56 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* Left Image with Parallax Effect */}
          <motion.div
            style={{ y }}
            variants={leftVariants}
            className="lg:w-1/2"
          >
            <div className="relative group">
              {/* Floating badges */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200 z-10"
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FaBolt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Fast</div>
                    <div className="text-xs text-gray-500">Load Time</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200 z-10"
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FaShieldAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Secure
                    </div>
                    <div className="text-xs text-gray-500">Protected</div>
                  </div>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>

                {/* Image */}
                <motion.img
                  src={dashboardImage}
                  alt="Dashboard Structure & Architecture"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border-8 border-white transform -rotate-1 group-hover:rotate-0 transition-all duration-500"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                />

                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Feature Dots */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 pointer-events-none"
              >
                {[1, 2, 3].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2 + dot,
                      repeat: Infinity,
                      delay: dot * 0.5,
                    }}
                    className={`absolute w-3 h-3 bg-blue-500 rounded-full ${
                      dot === 1
                        ? "top-1/4 left-1/4"
                        : dot === 2
                        ? "top-2/3 left-1/3"
                        : "top-1/3 left-2/3"
                    }`}
                  />
                ))}
              </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.7 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "<2s", label: "Load Time" },
                  { value: "A+", label: "Security" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={rightVariants} className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase py-2 px-4 rounded-full mb-6 shadow-lg"
            >
              <FaRocket className="text-sm" />
              Optimized Architecture
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              A Straightforward Structure{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  For Powerful
                </span>
                <motion.span
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </span>{" "}
              Digital Results
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg mb-6 leading-relaxed"
            >
              Our modern web and SaaS solutions are built with a clean, scalable
              architecture, ensuring fast performance and seamless user
              experience across all devices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              From startup websites to enterprise dashboards, our agile
              development approach delivers robust, responsive designs that
              drive real results.
            </motion.p>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                    className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
                  >
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors text-xl">
                      {feature.icon}
                    </div>
                  </motion.div>
                  <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Check List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-3 mb-8"
            >
              {[
                "Clean, maintainable codebase",
                "SEO-optimized structure",
                "Cross-browser compatibility",
                "Regular updates & maintenance",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  GET In Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="group border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                View Services
              </Link>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 1 }}
              className="mt-8 flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex -space-x-2">
                {[
                  // Pakistani clients
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
                  "https://uifaces.co/our-content/donated/gPZwBbd3.jpg",

                  // US clients
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
                ].map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt={`Client ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Trusted by 100+ Clients
                </div>
                <div className="text-xs text-gray-500">
                  Join our satisfied customers
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StructureSection;
