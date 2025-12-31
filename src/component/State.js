import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaSmile, 
  FaDesktop, 
  FaTrophy, 
  FaUsers,
  FaCalendarCheck,
  FaStar,
  FaChartLine,
  FaRocket
} from 'react-icons/fa';
import CountUp from 'react-countup';
import statsImage from "../assets/images/proj-image.jpg";

const stats = [
  {
    icon: <FaSmile />,
    number: 99,
    label: 'Happy Clients',
    suffix: '+',
    description: 'Satisfied customers worldwide',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <FaDesktop />,
    number: 50,
    label: 'Projects Done',
    suffix: '+',
    description: 'Successful deliveries',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: <FaTrophy />,
    number: 35,
    label: 'Total Awards',
    suffix: '+',
    description: 'Industry recognition',
    color: 'from-blue-600 to-purple-600'
  },
  {
    icon: <FaCalendarCheck />,
    number: 24,
    label: 'On-Time Delivery',
    suffix: '/7',
    description: 'Round the clock support',
    color: 'from-red-600 to-pink-600'
  }
];

const StatsSection = () => {
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, rotateY: 10 },
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

  const statCardVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24">
      {/* Animated background elements */}
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
          className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-60"
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
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-r from-red-100 to-orange-100 rounded-full opacity-60"
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold uppercase py-2 px-4 rounded-full mb-6 shadow-lg">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Do More With Shezi Tech
              </div>

              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
              >
                Over{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    50+
                  </span>
                  <motion.span
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
                  />
                </span>{' '}
                Completed Projects & Still Counting
              </motion.h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg mb-10 leading-relaxed"
            >
              From startups to enterprises, we've delivered exceptional results. 
              Try Shezi Tech Solution today and experience premium quality without the premium price tag.
            </motion.p>

            {/* Feature Points */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
            >
              {[
                { icon: <FaChartLine />, text: "Guaranteed Quality & Reliability" },
                { icon: <FaUsers />, text: "Expert Team of Professionals" },
                { icon: <FaRocket />, text: "Fast & Efficient Delivery" },
                { icon: <FaStar />, text: "Premium Support & Maintenance" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-red-100 rounded-lg group-hover:from-blue-200 group-hover:to-red-200 transition-all duration-300">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  initial="rest"
                  whileHover="hover"
                  className="relative"
                >
                  <motion.div
                    variants={statCardVariants}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden group h-full"
                  >
                    {/* Animated gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                      >
                        <div className="text-2xl">{stat.icon}</div>
                      </motion.div>

                      <motion.h3 
                        className="text-3xl font-bold text-gray-900 mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                      >
                        {isInView && (
                          <CountUp
                            start={0}
                            end={stat.number}
                            duration={2.5}
                            separator=","
                            suffix={stat.suffix}
                            className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
                          />
                        )}
                      </motion.h3>
                      
                      <p className="text-gray-900 font-bold uppercase text-sm mb-1">
                        {stat.label}
                      </p>
                      
                      <p className="text-gray-500 text-xs">
                        {stat.description}
                      </p>
                    </div>

                    {/* Animated progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden rounded-b-2xl">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? "100%" : 0 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${stat.color}`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            className="lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
          >
            <div className="relative">
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
                className="absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-200 z-10"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
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
                className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-200 z-10"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-3xl opacity-20 blur-2xl"></div>
                
                {/* Image with border */}
                <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={statsImage}
                    alt="Project Statistics & Achievements"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Bottom ribbon */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-8 left-1/4 right-1/4 bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 px-6 rounded-xl shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold">Trusted by 500+ Companies</div>
                    <div className="text-sm opacity-90">Startups to Enterprises</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 1 }}
              className="mt-16 bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ST
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Shezi Tech Solution</h4>
                  <p className="text-sm text-gray-600">Your Partner in Digital Excellence</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "We combine technical expertise with creative solutions to deliver projects 
                that exceed expectations. Every number tells a story of success."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;