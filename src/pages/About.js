import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import dashboardImage from '../assets/images/device.png';
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
  FaTrophy,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaGraduationCap
} from "react-icons/fa";

const AboutUsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const values = [
    { icon: <FaLightbulb />, title: "Innovation", desc: "Cutting-edge solutions for modern challenges" },
    { icon: <FaShieldAlt />, title: "Integrity", desc: "Honest, transparent partnerships" },
    { icon: <FaHandshake />, title: "Partnership", desc: "Long-term collaborative relationships" },
    { icon: <FaChartLine />, title: "Excellence", desc: "Quality-driven results every time" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <FaTrophy /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaUsers /> },
    { number: "50+", label: "Expert Team Members", icon: <FaCode /> },
    { number: "24/7", label: "Support Available", icon: <FaGlobe /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-24 px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-bold uppercase py-3 px-6 rounded-full mb-6 border border-white/20"
          >
            <FaRocket className="text-lg" />
            Transforming Digital Landscapes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            About{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Shezi Tech
              </span>
              <motion.span
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            </span>{" "}
            Solution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Pioneering digital innovation through expert software development, 
            academic excellence, and transformative technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-24 px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* About Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col lg:flex-row items-center gap-16 mb-32"
          >
            {/* Image */}
            <motion.div
              variants={leftVariants}
              className="lg:w-1/2"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
                
                {/* Main image */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl"
                >
                  <img
                    src={dashboardImage}
                    alt="Shezi Tech Solution Team & Technology"
                    className="w-full h-auto transform transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-200 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <FaCode className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Tech</div>
                      <div className="text-xs text-gray-500">Expertise</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-200 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <FaGraduationCap className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Academic</div>
                      <div className="text-xs text-gray-500">Excellence</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={rightVariants}
              className="lg:w-1/2"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Our{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Story
                  </span>
                  <motion.span
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </span>{" "}
                & Vision
              </motion.h2>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  Shezi Tech Solution is a forward-thinking technology company dedicated to 
                  delivering innovative software solutions tailored to your business needs. 
                  Our expert team specializes in full-stack web development, mobile applications, 
                  and custom software design — combining creativity with technical excellence.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  We strive to empower businesses through technology, providing scalable and 
                  efficient digital products that drive growth and success. At Shezi Tech Solution, 
                  we believe in building long-term partnerships by understanding our clients' 
                  goals and delivering solutions that exceed expectations.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  Join us on a journey of innovation and excellence, and let's transform your 
                  ideas into impactful digital experiences that stand the test of time.
                </motion.p>
              </div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-4"
              >
                {[
                  "Full-Stack Web Development & Mobile Apps",
                  "Academic Writing & Research Support",
                  "Custom SaaS & Enterprise Solutions",
                  "SEO & Digital Marketing Services"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-gray-800 font-medium">{point}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Contact Us
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  to="/services"
                  onClick={() => window.scrollTo(0, 0)}
                  className="group border-2 border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 text-center"
                >
                  View Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                By The{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Numbers
                </span>
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our achievements speak volumes about our commitment to excellence and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <div className="text-2xl text-blue-600 group-hover:text-blue-700">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Values
                </span>
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                These principles guide everything we do, ensuring we deliver exceptional value to every client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6"
                  >
                    <div className="text-2xl text-white">{value.icon}</div>
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                  
                  {/* Hover effect line */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;